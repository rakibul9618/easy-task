import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>()

  get imagePath() {
    return `users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `users/${this.avatar()}`);
}
 