import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DeliveryService } from "src/app/services/delivery.service";
import { formatDateToYMD, ngbDateStructToYMD } from 'src/app/util/date.format'
import { LoaderService } from "src/app/services/loading.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOrdenServicioProveedorComponent } from "./components/modal-orden-servicio-proveedor/modal-orden-servicio-proveedor.component";
import { ModalConfmOrdenComponent } from "./components/modal-confm-orden/modal-confm-orden.component";
import { Observable, of, Subject, Subscription, takeUntil } from "rxjs";
import { ModalConfMuestrasPorExamenComponent } from "./components/modal-conf-muestras-por-examen/modal-conf-muestras-por-examen.component";
import Swal from 'sweetalert2';
import { ModalCambiarEstadoSoporteComponent } from "./components/modal-cambiar-estado-soporte/modal-cambiar-estado-soporte.component";
import { ModalConfirmService } from 'src/app/services/modalConfirm.service';
import { ModalConSinAtencionComponent } from "./components/modal-con-sin-atencion/modal-con-sin-atencion.component";
import { ModalBuscarPacienteConComponent } from "./components/modal-buscar-paciente-con/modal-buscar-paciente-con.component";
import { ModalBuscarPacienteSinComponent } from "./components/modal-buscar-paciente-sin/modal-buscar-paciente-sin.component";
import { ModalCreacionServicioLaboratorioComponent } from "./components/modal-creacion-servicio-laboratorio/modal-creacion-servicio-laboratorio.component";
import { ModalAuditoriaComponent } from "./components/modal-auditoria/modal-auditoria.component";
import { ModalSeguimientoComponent } from "../../../../views/layout/full/shared/modal-seguimiento/modal-seguimiento.component";
import { ModalCoordServicioComponent } from "./components/modal-coord-servicio/modal-coord-servicio.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDetalleComponent } from "./components/modal-detalle/modal-detalle.component";
import { AlertService } from "src/app/services/alert.service";
import { LaboratorioService } from "src/app/services/laboratorio.service";
import { modelFiltadoAniados, modelFiltroAniados, modelFlebotomistaLaboratorio, modelParametroFiltro, modelresposponseFiltrado, paramsEkg } from "src/app/models/resources/Laboratorio.model";
import { PaginationData, PaginationOptions } from "src/app/views/layout/full/shared/pagination/pagination.component";


interface clsificacionOrden {
  id: string,
  name: string
}
interface interfaTipoConsulta {
  id: string,
  name: string
}
interface interfaClasificacion {
  cser_id: number,
  sser_nombre: string
}

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrl: './laboratorio.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush // verifica  los  INPUT o otro evento con referencia a este componente 
})
export class LaboratorioComponent implements OnInit, OnDestroy {
  @Input() showToggle = true;
  private _destroy$ = new Subject<void>();
  private modalConfirmSubscription: Subscription;
  private enabledControlSet: Set<string> = new Set<string>();
  listaClasificacion: interfaClasificacion[] = []
  flebotomistaLaboratorio$: Observable<modelFlebotomistaLaboratorio[]>
  buttonsDisabled: boolean = true;
  valueFlebotomista: boolean = false;
  datosParametro: modelParametroFiltro = new modelParametroFiltro
  parametroAniados: modelFiltroAniados = new modelFiltroAniados
  valueFinalizadas: boolean = false
  paraDataFiltroAniados: modelFiltadoAniados = new modelFiltadoAniados
  isVisibleEKG: boolean = false
  isVisibleExportar: boolean = false
  modo: string | null = null
  controlName: string
  endtDate: { year: number; month: number; day: number };
  startDate: { year: number; month: number; day: number };
  fechaInicioYMD: string;
  isLoading$ = this.loaderService.loading$;
  AllDatosDegrillaOrden: modelresposponseFiltrado[] = []
  selectedRow: any = null;
  filtroForm: FormGroup;
  cantidaDeItemllegan: number;
  estado: string;
  // Propiedades de paginación
  paginationData: PaginationData = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    currentItemsCount: 0
  };

  paginationOptions: PaginationOptions = {
    itemsPerPageOptions: [10, 30, 50],
    showItemsPerPageSelector: true,
    showPageInfo: true
  };
  // ===== NUEVO: estado de habilitación =====
  activeFilter: string | null = null;
  isEKGActive: boolean = false;
  isExclusiveMode: boolean = false;
  isChkCodigoOrden: boolean = false;
  isChkNumeroAtencion: boolean = false;
  isChkEstado: boolean = false;
  isChkClasificacion: boolean = false;
  isChkTipoPrograma: boolean = false;
  fechaFinYMD: string;
  codigoService: string;
  estadoEKG: any[] = [
    { id: '3', name: '3' },
    { id: '6', name: '6' },
    { id: 'C', name: 'C' }
  ];
  tipoConsulta: interfaTipoConsulta[] = [
    { id: 'Paciente', name: 'Paciente' },
    { id: 'Doctor', name: 'Doctor' },
    { id: 'Aseguradora', name: 'Aseguradora' },
    { id: 'Distrito', name: 'Distrito' },
    { id: 'DNI', name: 'DNI' },
  ]
  clsificacionOrde: clsificacionOrden[] = [
    { id: 'R', name: 'R' },
    { id: 'T', name: 'T' },
    { id: 'H', name: 'H' },
  ]
  fechaActual: Date = new Date()

  ngOnInit(): void {
    this.fechasActual()
    this.allDeliveryClasificacion()
    this.initFormularioFiltro()
    this.buttonsDisabled = true;
    this.allInfoFiltro()
    this.valueCodigoService()
    this.buscar()
  }
  fechasActual() {
    this.endtDate = {
      year: this.fechaActual.getFullYear(),
      month: this.fechaActual.getMonth() + 1,
      day: this.fechaActual.getDate(),
    };
    this.startDate = {
      year: this.fechaActual.getFullYear(),
      month: this.fechaActual.getMonth() + 1,
      day: this.fechaActual.getDate(),
    };
    // valores por defecto en formato YYYY-MM-DD
    this.fechaInicioYMD = formatDateToYMD(this.fechaActual);
    this.fechaFinYMD = formatDateToYMD(this.fechaActual);
  }

  valueCodigoService() {
    const ObjetoValor = localStorage.getItem('codigoServicio');
    const ValorDeLocaSTg = ObjetoValor ? JSON.parse(ObjetoValor) : 'PED';
    this.codigoService = ValorDeLocaSTg.codigoService;
  }

  initFormularioFiltro() {
    this.filtroForm = this.fb.group({
      codigoOrden: [{ value: '', disabled: true }],
      numeroAtencion: [{ value: '', disabled: true }],
      estadoEkg: [{ value: '', disabled: true }],
      chkEstadoEkg: [false],
      clasificacionOrdenLab: [{ value: '', disabled: true }],
      estadoOrdenLab: [{ value: '', disabled: true }],
      flebotomista: [{ value: '', disabled: true }],
      chkFlebotomista: [false],
      tipoPrograma: [{ value: '', disabled: true }],
      programa: [{ value: '', disabled: true }],
      programaInput: [{ value: '', disabled: true }],
      fechaInicio: [{ value: '', disabled: false }],
      fechaFin: [{ value: '', disabled: false }],
      chkFinalizadas: [''],
      chkPrograma: [''],
    });

    // Estado inicial: solo fechas habilitadas
    this.setInitialDisabledState();
  }


  // Mapeo de checkbox -> controles asociados
  private readonly inputControlMap: Record<string, string[]> = {
    codigoOrden: ['codigoOrden'],
    numeroAtencion: ['numeroAtencion'],
    programa: ['programa', 'programaInput'],
    tipoPrograma: ['tipoPrograma'],
    flebotomista: ['flebotomista'],
    estado: ['estadoOrdenLab'],
    clasificacion: ['clasificacionOrdenLab'],
    EKG: ['estadoEkg'],
    finalizadas: [],
  };

  private readonly multiFilterSet: Set<string> = new Set<string>([
    'programa',
    'flebotomista',
    'estado',
    'clasificacion',
  ]);

  // Controles que usan input de texto; el resto son selects
  private readonly textInputControls: Set<string> = new Set<string>([
    'codigoOrden',
    'numeroAtencion',
    'programaInput',
  ]);



  constructor(
    private deliveryservice: DeliveryService,
    private loaderService: LoaderService,
    private modalService: NgbModal,
    private modalConfirmService: ModalConfirmService,
    private fb: FormBuilder,
    private alerteservice: AlertService,
    private laboratorioservice: LaboratorioService,
    private cdr: ChangeDetectorRef
  ) {
    this.modalConfirmSubscription = new Subscription();

  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    // Limpiar la suscripción cuando el componente se destruye
    if (this.modalConfirmSubscription) {
      this.modalConfirmSubscription.unsubscribe();
    }

  }

  ItemColunm(item: any) {
    // Guardar la fila seleccionada
    this.selectedRow = item;
    // Condición para estados R2 o R3
    if (item.estado === '2 ' || item.estado === 'R2') {
      // console.log('estoy aqui :');
      const modalRef = this.modalService.open(ModalCoordServicioComponent, { size: "xl" });
      modalRef.componentInstance.selectedRow = this.selectedRow;
      modalRef.result.then((result) => {
        // console.log(result)
        if (result.message === 'anulada') {
          this.buscar()
          this.alerteservice.showAlertCenter('success', 'Orden Anulada', 'La orden ha sido Anulada correctamente buscalo en  Finalizadas')
        } else if (result.message === 'GrabarExitoso') {
          this.buscar()
          this.alerteservice.showAlertCenter('success', 'Orden actualizada', 'La orden ha sido actualizada correctamente y se asigno el proveedor')
        }
      }).catch(() => { })
    }

    // Condición para estados 0, 1, 2
    if (item.estado === '0 ' || item.estado === '1 ') {
      // console.log('estoy aqui :');
      const modalRef = this.modalService.open(ModalOrdenServicioProveedorComponent, { size: "lg" });
      modalRef.componentInstance.selectedRow = this.selectedRow;
      modalRef.result.then((result) => {

        if (result === 'todo salio con exito') {
          this.buscar()
          this.alerteservice.showAlertCenter('success', 'Orden actualizada', 'La orden ha sido actualizada correctamente y se asigno el proveedor')
        } else {
          return
        }
      }).catch(() => { })

    }
    // Condición para estados 3
    else if (item.estado === '3 ' || item.estado === 'R3') {

      // Si clasif es D, T o H
      if (item.clasificacion === 'T' || item.clasificacion === 'H' || item.clasificacion === 'D') {
        // console.log('estoy aqui')
        const modalRef = this.modalService.open(ModalConfmOrdenComponent, { size: "lg" });
        modalRef.componentInstance.selectedRow = this.selectedRow;
        modalRef.result.then((result) => {
          // console.log(result)
          if (result.message === 'Exitoso') {
            this.buscar()
            this.alerteservice.showAlertCenter('success', 'Se Genero correctamente la confirmación de la orden')
          }
        }).catch(() => {
          console.log('Error al cerrar el modal')
        })

      }
      // Si clasif es R
      else if (item.estado === '3 ' && item.clasificacion === 'R') {
        const modalRef = this.modalService.open(ModalConfMuestrasPorExamenComponent, { size: "lg" });
        modalRef.componentInstance.selectedRow = this.selectedRow;
        modalRef.result.then((result) => {
          // console.log(result)
          if (result.message === 'registro_exitoso') {
            this.alerteservice.showAlertCenter(
              'success',
              'Registro exitoso',
              `Se creó correctamente la Orden número: <span style="color: #00ab4a; font-weight: bold;">${result.codigoGenerado}</span>`,
              undefined, // timer opcional, usa el valor por defecto (2000)
              true // useHtml = true para permitir HTML
            );
            this.buscar()
          } else {
            this.alerteservice.showAlertCenter('success', 'Se Genero correctamente la confirmación de la orden')
            this.buscar()
          }
          // this.alerteservice.showAlertCenter('success', 'Se Genero correctamente la confirmación de la orden')

        }).catch(() => {
          this.buscar()
          // console.log('Error al cerrar el modal')
        })
      }
    }
  }


  closeModal() {
    this.modalService.dismissAll();
  }

  private allDeliveryClasificacion() {
    this.deliveryservice
      .getClasificacion()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: listaClasificacion => {
          if ('resultData' in listaClasificacion) {
            if (listaClasificacion.resultData.length > 0) {
              this.listaClasificacion = listaClasificacion.resultData
            } else {
              this.alerteservice.showAlertCenter('error', 'Error', 'No se encontraron datos de clasificación')
            }
          } else {
            console.error('Error al obtener clasificación', listaClasificacion ?? '(sin detalle)')
          }
        }
      })
  }
  /*
   *  ESTO DEBERIA EXPORTAR  UN  EXEL  
   */
  exportarEkgExce() {
    const paramsEkg: paramsEkg = {
      estado_ekg: this.filtroForm.get('estadoEkg')?.value,
      fecha_ini: this.fechaInicioYMD,
      fecha_fin: this.fechaFinYMD
    }
    this.laboratorioservice.ExportarReporteEKG(paramsEkg).subscribe({
      next: async (blob: Blob) => {
        try {
          const defaultFileName = `Ordenes_EKG${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.xlsx`;
          const anyWindow: any = window as any;
          if (anyWindow && anyWindow.showSaveFilePicker) {
            const handle = await anyWindow.showSaveFilePicker({
              suggestedName: defaultFileName,
              types: [
                {
                  description: 'Archivo de excel',
                  accept: { 'text/plain': ['.xlsx'] }
                }
              ]
            });
            const writable = await handle.createWritable();
            await writable.write(blob);
            await writable.close();
          } else {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = defaultFileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }

          this.alerteservice.showAlertCenter('success', 'Exel Descargado ');
        } catch (err) {
          console.error(err);
          this.alerteservice.showAlertCenter('warning', 'Descarga Cancelada');
        }
      }
    })
  }
  /**
   * ESTOY  GENER  UN TXT  PARA  EL  FLOBOTOMISTA  
  */
  exportarFlebotomista() {
    // console.log('exportarFlebotomista')
    const estados = this.AllDatosDegrillaOrden.filter((item) => item.estado === '3 ').map((item) => item.cod_serv_laboratorio).join(',')
    this.laboratorioservice.GenerarTXT_Flebotomista(estados).subscribe({
      next: async (blob: Blob) => {
        try {
          const defaultFileName = ` Archibo-Flebotomista${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.txt`;

          const anyWindow: any = window as any;
          if (anyWindow && anyWindow.showSaveFilePicker) {
            const handle = await anyWindow.showSaveFilePicker({
              suggestedName: defaultFileName,
              types: [
                {
                  description: 'Archivo de texto',
                  accept: { 'text/plain': ['.txt'] }
                }
              ]
            });
            const writable = await handle.createWritable();
            await writable.write(blob);
            await writable.close();
          } else {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = defaultFileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }

          this.alerteservice.showAlertCenter('success', 'Se Descargo correctamente el archivo TXT');
        } catch (err) {
          // console.error(err);
          this.alerteservice.showAlertCenter('warning', 'Descarga Cancelada');
        }
      }
    })
  }

  /**
   * BOTON QUE  CREA  UNA  ORDEN  DE  SERVICIO  LABORATORIO
   */
  btnCreacion() {
    const modalRef = this.modalService.open(ModalConSinAtencionComponent, { size: "md" });
    modalRef.componentInstance.modalSelection.subscribe((selection: string) => {
      // console.log(selection)
      this.modalService.dismissAll();
      if (selection === 'A') { //  ENTRA  PACIENTE  CON ASOCIACION
        //  console.log(selection)
        const buscarRef = this.modalService.open(ModalBuscarPacienteConComponent, { size: "lg" });
        buscarRef.componentInstance.modalSelection.subscribe((data: any) => {
          // console.log(data)
          const creacionRef = this.modalService.open(ModalCreacionServicioLaboratorioComponent, { size: "xl" });
          creacionRef.componentInstance.selectedPatientData = data.paciente;
          creacionRef.componentInstance.selectedService = data.servicio;
          creacionRef.componentInstance.selectdTipeServicio = selection;
          creacionRef.result.then((result) => {
            // console.log(result)
            if (result) {
              // console.log(result)
              if (result.message === 'registro_exitoso') {
                this.alerteservice.showAlertCenter(
                  'success',
                  'Registro exitoso',
                  `Se creó correctamente la Orden número: <span style="color: #00ab4a; font-weight: bold;">${result.codigoGenerado}</span>`,
                  undefined, // timer opcional, usa el valor por defecto (2000)
                  true // useHtml = true para permitir HTML
                );
                this.buscar()
              }

            }
          }).catch(() => { });
        });
      } else if (selection === 'N') { //  ENTRA  PACIENTE  NO ASOCIADOS
        const buscarRef = this.modalService.open(ModalBuscarPacienteSinComponent, { size: "lg" });

        buscarRef.componentInstance.modalSelection.subscribe((data: any) => {
          const creacionRef = this.modalService.open(ModalCreacionServicioLaboratorioComponent, { size: "xl" });
          creacionRef.componentInstance.selectedPatientData = data.paciente;
          creacionRef.componentInstance.selectedService = data.servicio;
          creacionRef.componentInstance.selectdTipeServicio = selection;
          creacionRef.result.then((result) => {
            if (result.message === 'registro_exitoso') {
              this.alerteservice.showAlertCenter(
                'success',
                'Registro exitoso',
                `Se creó correctamente la Orden número: <span style="color: #00ab4a; font-weight: bold;">${result.codigoGenerado}</span>`,
                undefined, // timer opcional, usa el valor por defecto (2000)
                true // useHtml = true para permitir HTML
              );
              this.buscar()
            }
          }).catch(() => {
            this.alerteservice.showAlertCenter('error', 'Error', 'No se pudo crear la orden')
          });
        });
      }
    });
  }

  /**
   * BOTON QUE  MUESTRA  LA  AUDITORIA  DE  LA  ORDEN
   */
  btnAuditoria() {
    const modalRef = this.modalService.open(ModalAuditoriaComponent, { size: "lg" });
    modalRef.componentInstance.selectedRow = this.selectedRow;
    modalRef.result.then((result) => {
      // console.log(result)
      this.buscar()
      // this.alerteservice.showAlertCenter('success', 'El estado de la orden se actualizó correctamente')

    })
  }

  /**
   * BOTON QUE  MUESTRA  EL  SEGUIMIENTO  DE  LA  ORDEN
   */
  btnSeguimiento() {
    const modalRef = this.modalService.open(ModalSeguimientoComponent, { size: "lg" });
    modalRef.componentInstance.selectedRow = this.selectedRow;
    modalRef.componentInstance.codigoServicio = this.codigoService;
  }

  /**
   * BOTON QUE  MUESTRA  EL  DETALLE  DE  LA  ORDEN
   */
  btnDetalle() {
    const modalRef = this.modalService.open(ModalDetalleComponent, { size: "lg" });
    modalRef.componentInstance.selectedRow = this.selectedRow;

  }

  /**
   * BOTON QUE  MUESTRA  EL  SOPORTE  DE  LA  ORDEN
   */
  btnSoporte() {
    // console.log('btnSoporte')
    if (!this.selectedRow) {
      Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: 'Por favor seleccione una fila primero',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    const modalRef = this.modalService.open(ModalCambiarEstadoSoporteComponent, { size: "md" });
    modalRef.componentInstance.selectedRow = this.selectedRow;
    modalRef.result.then((result) => {
      // console.log(result)
      if (result.message === 'Exitoso') {
        this.buscar()
        this.alerteservice.showAlertCenter('success', 'El estado de la orden se actualizó correctamente')
      } else {
        this.alerteservice.showAlertCenter('error', 'Error', 'No se pudo actualizar el estado de la orden')
      }
    })

  }

  selectRow(item: any) {
    this.estado = item.estado;
    this.selectedRow = item;
    this.buttonsDisabled = false;
  }

  /**
   * CHECKBOX QUE  SELECCIONA   LAS  OPCION PARA EL FILTRADOS
   */
  onExclusiveCheckboxChange(controlName: string, event: any) {
    const checked = !!event.target.checked;
    const value = event.target.value;
    // Setear 'modo' cuando cualquier checkbox esté activo
    if (checked) {
      this.modo = value;
    } else {
      this.isVisibleExportar = false;
      this.modo = null;
    }
    // Limpiar 'modo' si se desmarca uno de los exclusivos (codigoOrden, numeroAtencion, EKG)
    if (!checked && (controlName === 'codigoOrden' || controlName === 'numeroAtencion' || controlName === 'EKG')) {
      this.modo = null;
    }
    // Actualizar flag de finalizadas según el checkbox
    if (controlName === 'finalizadas') {
      this.valueFinalizadas = checked;
    }
    // Actualizar flag de finalizadas según el checkbox
    if (controlName === 'flebotomista') {
      this.valueFlebotomista = checked;
    }

    if (this.modo === 'flebotomista' && checked === true) {
      this.flebotomistaLaboratorio$ = this.laboratorioservice.GetLaboratorio_ListFlebotomistaLaboratorio()
    } else {
      this.flebotomistaLaboratorio$ = of([])
    }
    // Sincronizar estados locales de checkboxes no reactivos
    if (controlName === 'codigoOrden') this.isChkCodigoOrden = checked;
    if (controlName === 'numeroAtencion') this.isChkNumeroAtencion = checked;
    if (controlName === 'estado') this.isChkEstado = checked;
    if (controlName === 'clasificacion') this.isChkClasificacion = checked;
    if (controlName === 'tipoPrograma') this.isChkTipoPrograma = checked;

    // 0) Comportamiento especial: Tipo Programa (al hacer click, habilita/deshabilita su propio select)
    if (controlName === 'tipoPrograma') {
      if (checked) {
        this.enableControls(this.inputControlMap['tipoPrograma']);
      } else {
        this.disableControls(this.inputControlMap['tipoPrograma']);
        this.clearControls(this.inputControlMap['tipoPrograma']);
      }
      return;
    }

    // 1) Caso especial EKG: bloquea todo lo demás
    if (controlName === 'EKG') {
      // console.log(controlName)
      if (checked) {
        // desmarcar todo lo demás
        this.clearAllSelectionsExcept('EKG');
        this.isEKGActive = true;
        this.isExclusiveMode = false;
        this.activeFilter = 'EKG';
        this.enabledControlSet.clear();
        this.setInitialDisabledState();
        this.enableControls(this.inputControlMap['EKG']);
      } else {
        this.isEKGActive = false;
        this.activeFilter = null;
        this.setInitialDisabledState();
        // re-habilitar los multi seleccionados que sigan marcados
        this.enabledControlSet.forEach(k => this.enableControls(this.inputControlMap[k]));
        this.clearControls(this.inputControlMap['EKG']);
      }
      return;
    }

    // 2) Exclusivos: Código de Orden / N° Atención
    const isExclusiveCandidate = (controlName === 'codigoOrden' || controlName === 'numeroAtencion');
    if (isExclusiveCandidate) {
      if (checked) {
        // desmarcar EKG y todos los demás checks
        this.clearAllSelectionsExcept(controlName);
        this.isExclusiveMode = true;
        this.isEKGActive = false;
        this.activeFilter = controlName;
        this.setInitialDisabledState();
        this.enableControls(this.inputControlMap[controlName]);
      } else {
        this.isExclusiveMode = false;
        this.activeFilter = null;
        this.setInitialDisabledState();
        this.enabledControlSet.forEach(k => this.enableControls(this.inputControlMap[k]));
        this.clearControls(this.inputControlMap[controlName]);
      }
      return;
    }

    // 3) Multi-selección: programa, flebotomista, estado, clasificacion
    if (this.multiFilterSet.has(controlName)) {
      this.isExclusiveMode = false;
      this.isEKGActive = false;
      if (checked) {
        this.enabledControlSet.add(controlName);
        this.enableControls(this.inputControlMap[controlName]);
      } else {
        this.enabledControlSet.delete(controlName);
        this.disableControls(this.inputControlMap[controlName]);
        this.clearControls(this.inputControlMap[controlName]);
      }
      return;
    }
  }

  /**
   * TAREA  FILTROS  ANIADOS DE  DIA  DE  HOY 
  */
  allInfoFiltro() {
    this.paraDataFiltroAniados.fecha_ini = this.fechaInicioYMD || null;
    this.paraDataFiltroAniados.fecha_fin = this.fechaFinYMD || null;
    this.paraDataFiltroAniados.estado = null
    this.paraDataFiltroAniados.cod_laboratorios = null
    this.paraDataFiltroAniados.cod_clasif = null
    this.paraDataFiltroAniados.cod_pruebas = null
    this.paraDataFiltroAniados.cod_resp_muestra = null
    // console.log(this.paraDataFiltroAniados)
    this.requestAniados(this.paraDataFiltroAniados)

  }

  /**
   * BOTON QUE   SE JECUTA EN  LA  PRIVARA  CICLO DE  VIDA Y HACE  UN BUSQUEDA
   *  DEL DIA  DE  HOY  POR DEFECTO
   */
  buscar() {
    // Validar formulario antes de proceder
    if (this.filtroForm.invalid) {
      this.markFormGroupTouched();
      this.alerteservice.showAlertExito('info','Por favor complete todos los campos requeridos');
      return;
    }

    if (!this.modo) {
      console.log('buscar')
      this.paraDataFiltroAniados.fecha_ini = this.fechaInicioYMD ;
      this.paraDataFiltroAniados.fecha_fin = this.fechaFinYMD ;
      this.paraDataFiltroAniados.estado = null
      this.paraDataFiltroAniados.cod_laboratorios = null
      this.paraDataFiltroAniados.cod_clasif = null
      this.paraDataFiltroAniados.cod_pruebas = null
      this.paraDataFiltroAniados.cod_resp_muestra = null
      this.requestAniados(this.paraDataFiltroAniados)

    } else if (this.modo == 'CODIGOS') { //BUSCA  POR  CODIGO DE  ORDEN  Y POR   NUMEOR DE ATENCION 
      this.datosParametro.modo = this.modo
      this.datosParametro.cod_ate = this.filtroForm.get('numeroAtencion')?.value || null
      this.datosParametro.cod_serv_laboratorio = this.filtroForm.get('codigoOrden')?.value || null
      this.datosParametro.estado_ekg = null
      this.datosParametro.fecha_ini = null;
      this.datosParametro.fecha_fin = null;
      this.datosParametro.pageNumber = this.paginationData.currentPage;
      this.datosParametro.rowsporpage = this.paginationData.itemsPerPage;
      this.requestFilter(this.datosParametro)
    }
    else if (this.modo == 'EKG') {  //  BUSCA  POR  ESTADO  EKG MANDO LA  FECHA DEL DIA DE  HOY
      this.isVisibleEKG = !this.isVisibleEKG
      this.datosParametro.modo = this.modo
      this.datosParametro.cod_ate = this.filtroForm.get('numeroAtencion')?.value || null
      this.datosParametro.cod_serv_laboratorio = this.filtroForm.get('codigoOrden')?.value || null
      this.datosParametro.estado_ekg = this.filtroForm.get('estadoEkg')?.value || null
      this.datosParametro.fecha_ini = this.fechaInicioYMD;
      this.datosParametro.fecha_fin = this.fechaFinYMD;
      this.requestFilter(this.datosParametro)
    }

    else if (
      this.modo == 'flebotomista' || this.modo == 'finalizadas' ||
      this.modo == 'clasificacion' || this.modo == 'programa' ||
      this.modo == 'tipoPrograma' || this.modo == 'estado' ||
      this.modo == 'clasificacionOrdenLab'
    ) {
      if (this.filtroForm.get('flebotomista')?.value) {
        this.isVisibleExportar = !this.isVisibleExportar
      }
      this.parametroAniados.fecha_ini = this.fechaInicioYMD;
      this.parametroAniados.fecha_fin = this.fechaFinYMD;
      this.parametroAniados.estado = this.filtroForm.get('estadoOrdenLab')?.value || null,
        this.parametroAniados.cod_laboratorios = null,
        this.parametroAniados.cod_clasif = this.filtroForm.get('tipoPrograma')?.value || null,
        this.parametroAniados.cod_resp_muestra = this.filtroForm.get('flebotomista')?.value || null,
        this.parametroAniados.clasificacion = this.filtroForm.get('clasificacionOrdenLab')?.value || null,
        this.parametroAniados.campo_texto = this.filtroForm.get('programa')?.value || null,
        this.parametroAniados.valor_campo_texto = this.filtroForm.get('programaInput')?.value || null,
        this.parametroAniados.usar_fecha_coordinada = this.valueFlebotomista
      this.parametroAniados.solo_finalizadas = this.valueFinalizadas
      this.parametroAniados.pageNumber = this.paginationData.currentPage;
      this.parametroAniados.rowsporpage = this.paginationData.itemsPerPage;
      this.requestAniados(this.parametroAniados)
    }

  }

  /**
   * EJECUTA  LA  PETICION  ANIADOS
   */
  requestAniados(parametroAniados) {
    this.laboratorioservice.GetLaboratorio_ListServicioLaboratorioAnidado(parametroAniados).pipe(
      takeUntil(this._destroy$)
    ).subscribe((lsitaGrilla) => {


      if (lsitaGrilla) {
          
        this.AllDatosDegrillaOrden = lsitaGrilla
        // Actualizar datos de paginación
        this.paginationData.currentItemsCount = lsitaGrilla.length;
        this.paginationData.totalItems = lsitaGrilla[0].total_registros || 1;

        // console.log(this.totalCanntidadRegistro)
      } else {
        this.AllDatosDegrillaOrden = []
        this.paginationData.currentItemsCount = 0;
        this.paginationData.totalItems = 0;
      }
      this.cdr.detectChanges();
    })
  }
 
  requestFilter(datosParametro?) {
    this.laboratorioservice.GetLaboratorio_ListarServicioLaboratorioPorCodigoEkg(datosParametro).pipe(
      takeUntil(this._destroy$)
    )
      .subscribe((res) => {
        if (res) {
          
          this.AllDatosDegrillaOrden = res
          // Actualizar datos de paginación
          this.paginationData.currentItemsCount = res.length;
          this.paginationData.totalItems = res[0].total_registros || 1;

          // console.log(this.totalCanntidadRegistro)
        } else {
          this.AllDatosDegrillaOrden = []
          this.paginationData.currentItemsCount = 0;
          this.paginationData.totalItems = 0;
        }
        this.cdr.detectChanges();
      })
  }

  onFechaInicioChange(struct: { year: number; month: number; day: number }) {
    this.startDate = struct;
    this.fechaInicioYMD = ngbDateStructToYMD(struct);
    // console.log(this.fechaInicioYMD);
  }

  onFechaFinChange(struct: { year: number; month: number; day: number }) {
    this.endtDate = struct;
    this.fechaFinYMD = ngbDateStructToYMD(struct);
    // console.log(this.fechaFinYMD);
  }


  // ===== Utilidades para habilitar/deshabilitar =====
  private setInitialDisabledState(): void {
    // Deshabilitar todos los inputs/selects menos fechas
    const allControls = [
      'codigoOrden', 'numeroAtencion', 'estadoEkg', 'clasificacionOrdenLab', 'estadoOrdenLab',
      'flebotomista', 'tipoPrograma', 'programa', 'programaInput'
    ];
    allControls.forEach(c => this.filtroForm.get(c)?.disable({ emitEvent: false }));
    this.filtroForm.get('fechaInicio')?.enable({ emitEvent: false });
    this.filtroForm.get('fechaFin')?.enable({ emitEvent: false });
  }

  private enableControls(controls: string[]): void {
    controls.forEach(c => {
      const control = this.filtroForm.get(c);
      if (control) {
        control.enable({ emitEvent: false });
        // Agregar validador requerido cuando se habilita el control
        control.setValidators([Validators.required]);
        control.updateValueAndValidity({ emitEvent: false });
      }
    });
  }

  private disableControls(controls: string[]): void {
    controls.forEach(c => {
      const control = this.filtroForm.get(c);
      if (control) {
        control.disable({ emitEvent: false });
        // Remover validadores cuando se deshabilita el control
        control.clearValidators();
        control.updateValueAndValidity({ emitEvent: false });
      }
    });
  }

  // Limpia valores de los controles indicados
  private clearControls(controls: string[]): void {
    controls.forEach(controlName => {
      const control = this.filtroForm.get(controlName);
      if (!control) return;
      const isText = this.textInputControls.has(controlName);
      // Para que aparezca el placeholder, asignamos '' también en selects
      control.setValue('', { emitEvent: false });
      // Limpiar errores de validación
      control.setErrors(null);
      control.markAsUntouched();
    });
  }

  // Desmarca todos los checkboxes y deja marcado solo el indicado (si aplica)
  private clearAllSelectionsExcept(except: string): void {
    // Reactivos
    this.filtroForm.patchValue({
      chkPrograma: except === 'programa' ? this.filtroForm.get('chkPrograma')?.value : false,
      chkFlebotomista: except === 'flebotomista' ? this.filtroForm.get('chkFlebotomista')?.value : false,
      chkFinalizadas: except === 'finalizadas' ? this.filtroForm.get('chkFinalizadas')?.value : false,
      chkEstadoEkg: except === 'EKG' ? true : false,
    }, { emitEvent: false });

    // No reactivos
    this.isChkCodigoOrden = (except === 'codigoOrden') ? true : false;
    this.isChkNumeroAtencion = (except === 'numeroAtencion') ? true : false;
    this.isChkEstado = (except === 'estado') ? true : false;
    this.isChkClasificacion = (except === 'clasificacion') ? true : false;
    this.isChkTipoPrograma = (except === 'tipoPrograma') ? true : false;

    // Deshabilitar controles asociados a multi-selección activos y limpiar set
    this.enabledControlSet.forEach(k => {
      if (k !== except) {
        this.disableControls(this.inputControlMap[k]);
        this.clearControls(this.inputControlMap[k]);
      }
    });
    this.enabledControlSet.clear();
    if (this.multiFilterSet.has(except)) this.enabledControlSet.add(except);

    // Limpiar valores de todos los controles (no multi) excepto el indicado
    Object.keys(this.inputControlMap).forEach(k => {
      if (k !== except && !this.multiFilterSet.has(k)) {
        this.clearControls(this.inputControlMap[k]);
      }
    });
  }
  /**
   * Métodos de paginación para el componente reutilizable
   */
  onItemsPerPageChange(newItemsPerPage: number) {
    // console.log('Items per page changed to:', newItemsPerPage);
    this.paginationData.itemsPerPage = newItemsPerPage;
    this.paginationData.currentPage = 1; // Reset to first page
    this.buscar();
  }

  onPreviousPage() {
    if (this.paginationData.currentPage > 1) {
      this.paginationData.currentPage--;
      // console.log('Previous page:', this.paginationData.currentPage);
      this.buscar();
    }
  }

  onNextPage() {
    this.paginationData.currentPage++;
    // console.log('Next page:', this.paginationData.currentPage);
    this.buscar();
    if (this.paginationData.currentItemsCount === 0) {
      return
      // console.log('esta vacio');
    }
  }

  /**
   * Marca todos los controles del formulario como touched para mostrar errores
   */
  private markFormGroupTouched(): void {
    Object.keys(this.filtroForm.controls).forEach(key => {
      const control = this.filtroForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }
}
