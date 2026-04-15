import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrderComponent } from './confirm-order.component';

describe('ConfirmOrderComponent', () => {
	let component: ConfirmOrderComponent;
	let fixture: ComponentFixture<ConfirmOrderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ConfirmOrderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfirmOrderComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
