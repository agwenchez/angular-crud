import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api:ApiService , private dialogRef: MatDialogRef<DialogComponent>) {

   }

  productForm !: FormGroup
  freshnessList = [ "Brand New", "Second Hand", "Refurbished" ]

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName:['', Validators.required],
      category:['', Validators.required],
      price:['', Validators.required],
      freshness:['', Validators.required],
      comment:['', Validators.required],
      date:['', Validators.required],
    })
  }

  addProduct(){
    console.log("Product",this.productForm.value)
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value).subscribe({
        next:(res)=>{
            alert('Product added successfully')
            this.productForm.reset()
            this.dialogRef.close()
        },
        error:()=>{
          alert("Error occured")
        }
      })
    }
  }

}
