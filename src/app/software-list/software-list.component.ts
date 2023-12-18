
import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../software.service';
import { ISoftware } from '../Interfaces/ISoftware';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css'],
})
export class SoftwareListComponent implements OnInit {
  softwareList: ISoftware[] = [];

  constructor(private softwareService: SoftwareService) {}

  ngOnInit(): void {
    this.getSoftwareList();
  }

  private getSoftwareList() {
    this.softwareService.getSoftwareList().subscribe(
      (softwareList) => {
        this.softwareList = softwareList;
      },
      (error) => {
        console.error('Error al obtener la lista de software:', error);
      }
    );
  }
}
