import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, debounce } from 'rxjs/operators';
@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl('', [Validators.minLength(3)]);
  constructor() { }
  ngOnInit(): void {
       this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchValue: string) => {
       if (searchValue && !this.search.invalid) {
        this.searchEvent.emit(searchValue);
      }
      });
  }
}
