import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController, IonDatetime, IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {
  @ViewChild('ionPopver1') public ionPopover1: IonPopover;
  @ViewChild(IonPopover) popover!: IonPopover;

physicalImage:string | null =null;

  constructor(
    private fb: FormBuilder,
    private actionSheet : ActionSheetController
  ) {}
  ngOnInit() {}
  statusForm = this.fb.group({
    selectedStatus: [''],
    followupDate: [''],
    followupTime: [''],
    earning: [''],
    contactMode: [''],
    remark:['']
  });

  status = [
    { icon: 'calendar-number-outline', name: 'Date', value: 'Sep 20,2025' },
    { icon: 'person-outline', name: 'Customer', value: 'Rupesh Nag' },
    { icon: 'location-outline', name: 'Location', value: 'Gurugram' },
    { icon: 'snow-outline', name: 'Lead For', value: 'Sale' },
    { icon: 'home-outline', name: 'Property Type', value: 'Apartment' },
    { icon: 'layers-outline', name: 'Inventory', value: '1 BHK' },
    { icon: 'resize-outline', name: 'Size', value: '900 Sq. ft.' },
    { icon: 'cash-outline', name: 'Budget Range', value: '50-60 L' },
    { icon: 'pin-outline', name: 'Location Pref', value: 'Kamothe, Navi Mumbai' },
    { icon: 'sparkles-outline', name: 'Amenities', value: 'Park Facing, Club' },
    { icon: 'time-outline', name: 'Status', value: 'Follow Up' },
  ];

  get fromdate() {
    return this.statusForm.get('fromdate');
  }
  onPopoverClick() {
    this.ionPopover1.dismiss();
  }

  onTimeChange(event: any) {
    const isoValue = event.detail.value;
    const date = new Date(isoValue);
    const formattedTime = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date);

    this.statusForm.get('followupTime')?.setValue(formattedTime);
  }

  onDateChange(event: any) {
    const dateValue = event.detail.value;
    this.statusForm.get('followupDate')?.setValue(dateValue);
  }

  onStatusChange(event: any) {
    const selectedValue = event.detail.value;
    if (selectedValue !== 'followup') {
      this.statusForm.get('followupDate')?.setValue('');
      this.statusForm.get('followupTime')?.setValue('');
    }
  }

  async openActionSheet(){
    const actionSheet = await this.actionSheet.create({
      header: 'Upload Picture',
      buttons:[
         {
      text:'Take Photo',
      icon:'camera-outline',
      handler:()=>{
       this.takePhoto();
      },
    },
    {
      text:'Choose from Gallery',
      icon:'image-outline',
      handler:()=>{
        this.openGallery();
      },
    },
     {
          text: 'Remove Photo',
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            this.physicalImage = null;
          },
        }
      ]
    });
    await actionSheet.present();
  }

  async takePhoto(){
    const image = await Camera.getPhoto({
      quality:90,
      resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera,
    });
     this.physicalImage=image.dataUrl!;
  }
  async openGallery(){
  const image=await Camera.getPhoto({
    quality:90,
    resultType:CameraResultType.DataUrl,
    source:CameraSource.Photos,
  });
  this.physicalImage=image.dataUrl;
}
}
