import { NgModule } from '@angular/core';
import { ViewEventComponent } from './view-event/view-event';
import { ViewBookModal } from './view-book/view-book';

@NgModule({
	declarations: [ViewBookModal,
    ViewEventComponent],
	imports: [],
	exports: [ViewBookModal,
    ViewEventComponent]
})
export class ComponentsModule {}
