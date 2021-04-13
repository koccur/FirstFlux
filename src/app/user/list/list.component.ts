import {Component, Input, OnInit} from '@angular/core';

export interface UserItem {
  id: number;
  title: string;
  content: unknown;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() elements: UserItem[] = [];

  addElement(newData: UserItem): void {
    this.elements.push(newData);
  }

  sort(data): void {
    this.elements.sort((a: UserItem, b: UserItem) => {
      return a.title.localeCompare(b.title);
    });
  }

  ngOnInit(): void {
  }

}
