import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isAdd = false;
  isShow = false;
  userId = null;
  users = [];
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(70),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(70),
        ],
      ],
      age: [
        '18',
        [
          Validators.required,
          Validators.min(18),
          Validators.max(100),
          Validators.pattern(/[1-9]{1}[0-9]{1}/)
        ],
      ],
      mobileNumber: [
        Validators.required,
        [Validators.required, Validators.pattern(/[(]09[)][/\s/g][0-9]{2}[-]?[0-9]{3}[-]?[0-9]{4}/)],
        // Validators.maxLength(16),
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      mailingAddress: this.formBuilder.group({
        street: ['', Validators.required],
        barangay: ['', Validators.required],
        city: ['', Validators.required],
        province: ['', Validators.required],
        zipCode: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern(/[1-9]{4}/)
          ],
        ],
        country: ['', Validators.required],
      }),
    });
  }

  formatMailingAddress(value) {
    if (!value) return 'none';
    let newValue = '';
    Object.keys(value).map((key) => {
      newValue = value[key] ? newValue + value[key] + ' ' : '';
    });
    return newValue;
  }

  addUser(): void {
    this.isAdd = true;
    this.userId = null;
    this.isShow = true;
    this.userForm.reset();
  }

  editUser(id: number): void {
    if (!id) return;
    const {
      firstName,
      lastName,
      age,
      mobileNumber,
      email,
      mailingAddress,
    } = this.users.find((user) => user.id === id);

    this.userForm.setValue({
      firstName: firstName,
      lastName: lastName,
      age: age,
      mobileNumber: mobileNumber,
      email: email,
      mailingAddress: {
        street: mailingAddress.street,
        barangay: mailingAddress.barangay,
        city: mailingAddress.city,
        province: mailingAddress.province,
        zipCode: mailingAddress.zipCode,
        country: mailingAddress.country,
      },
    });
    this.isAdd = false;
    this.userId = id;
    this.isShow = true;
  }

  onSubmit(): void {
    const {
      firstName,
      lastName,
      age,
      mobileNumber,
      email,
      mailingAddress,
    } = this.userForm.value;
    const newValue = {
      id: uuid.v4(),
      firstName: firstName,
      lastName: lastName,
      age: age,
      mobileNumber: mobileNumber,
      email: email,
      mailingAddress: {
        street: mailingAddress.street,
        barangay: mailingAddress.barangay,
        city: mailingAddress.city,
        province: mailingAddress.province,
        zipCode: mailingAddress.zipCode,
        country: mailingAddress.country,
      },
    };

    if (this.isAdd) {
      newValue.id = uuid.v4();
      this.users.unshift(newValue);
      this.isShow = false;
    } else {
      for (let i = 0; this.users.length > i; i++) {
        if (this.userId === this.users[i].id) {
          this.users[i] = newValue;
          this.isShow = false;
          return;
        }
      }
    }
  }

  deleteUser(id: number): void {
    const newUsers = this.users.filter((user) => user.id != id);
    if (newUsers) this.users = newUsers;
  }
}
