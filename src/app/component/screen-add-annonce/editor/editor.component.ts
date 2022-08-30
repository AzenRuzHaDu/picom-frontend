import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';
import { Tarif } from 'src/app/business/tarif';
import { Annonce } from 'src/app/business/annonce';

import { TrancheHorraire } from 'src/app/business/tranche-horraire';
import { Zone } from 'src/app/business/zone';
import { TrancheHoraireService } from 'src/app/services/tranche-horaire.service';
import { ZoneService } from 'src/app/services/zone.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  annonce: Annonce = new Annonce();

  zones$!: Observable<Zone[]>;
  tranchesHoraires$!: Observable<TrancheHorraire[]>;

  constructor(
    private zoneService: ZoneService,
    private tranchesHorairesService: TrancheHoraireService,
    private userservice: UtilisateurService
  ) {}

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '400px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Ecrivez le contenu de votre annonce',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['insertImage', 'insertVideo'], ['fontSize']],
  };

  ngOnInit(): void {
    this.zones$ = this.zoneService.getZones();
    this.tranchesHoraires$ =
      this.tranchesHorairesService.getTranchesHorraires();
  }

  submit(form: NgForm) {
    console.log(form.value);
    console.log(this.annonce);
    this.annonce.idClient = 3;
    this.userservice.sendAnnonce(this.annonce)
  }

  pushTh(th: TrancheHorraire) {
    this.annonce.trancheHorraires.push(th);
  }

  pushZoneandTH(z: Zone, th: TrancheHorraire) {
    this.annonce.zones.push(z);
    this.annonce.trancheHorraires.push(th);
  }

  toogle() {
    let x = document.querySelectorAll('.tg');
    x.forEach((i) => {
      i.classList.toggle('tg');
    });
  }
}
