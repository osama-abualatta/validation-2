<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit, reset }">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset">
        <div class="row mt-1">
          <label class="col-md-3 "
            ><i class="fas fa-plus"></i>اضافة موظف جديد</label
          >
        </div>

        <div class="row mt-1">
          <div class="col-md-3"></div>
          <div class="col-md-5">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name="صورة "
            >
              <picture-input
                v-model="selectImage"
                ref="pictureInput"
                @change="onChange"
                width="150"
                height="150"
                margin="16"
                accept="image/jpeg,image/png"
                size="10"
                buttonClass="btn"
                :removable="true"
                :customStrings="{
                  upload: '<h1>Bummer!</h1>',
                  drag: 'Drag a 😺 GIF or GTFO',
                }"
              >
              </picture-input>
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2">اسم الموظف </label>
          <div class="col-md-10">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name="الاسم"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="الاسم"
                v-model="inputName"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2"> المؤهل العلمي</label>
          <div class="col-md-10">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name="المؤهل العلمي"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="المؤهل العلمي"
                v-model="qualification"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2 ">الخبرات السابقة </label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name="الخبرات السابقة"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder=" الخبرات السابقة"
                v-model="priorexperiences"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
          <label class="col-md-2"> تاريخ الميلاد</label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name="تاريخ الميلاد"
            >
              <datepicker
                placeholder="تاريخ الميلاد"
                :bootstrap-styling="true"
                v-model="startDate"
                :language="ar"
              >
                <div slot="beforeCalendarHeader" class="calender-header">
                  Choose a Date
                </div>
              </datepicker>
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2">بلد الجنسية</label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name=" بلد الجنسية"
            >
              <multiselect v-model="nationality" :options="options">
              </multiselect>
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>

          <label class="col-md-2"> الجنس</label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name=" الجنس"
            >
              <multiselect v-model="gender" :options="['انثى', 'ذكر']">
              </multiselect>
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2"> <span>القسم</span> </label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name=" القسم"
            >
              <multiselect
                v-model="division"
                :options="['رفح', 'غزة', 'النصيرات']"
              >
              </multiselect>
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>

          <label class="col-md-2"> الحالةالاجنماعية</label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name=" الحالة الاجتماعية"
            >
              <multiselect v-model="Socialstatus" :options="['متزوج', 'اعزب']">
              </multiselect>
              <ul class="error ">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2">رقم حساب البنك </label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required|numeric"
              :bails="false"
              v-slot="{ errors }"
              name=" رقم حساب البنك"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="  رقم حساب البنك"
                v-model="bankAccountNumber"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>

          <label class="col-md-2"> رقم مكتب العمل</label>
          <div class="col-md-4">
            <ValidationProvider
              rules="required|numeric"
              :bails="false"
              v-slot="{ errors }"
              name=" رقم مكتب العمل"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="  رقم مكتب العمل"
                v-model="officeNumber"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2"> بريد الكتروني </label>
          <div class="col-md-10">
            <ValidationProvider
              rules="required|email"
              :bails="false"
              v-slot="{ errors }"
              name="بريد الكتروني"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="بريد الكتروني"
                v-model="email"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2"> هاتف</label>
          <div class="col-md-2">
            <ValidationProvider
              rules="required|numeric"
              :bails="false"
              v-slot="{ errors }"
              name="1هاتف"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="هاتف1"
                v-model="phone1"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
          <div class="col-md-2">
            <ValidationProvider :bails="false" v-slot="{ errors }" name="هاتف2">
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="هاتف2"
                v-model="phone2"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
          <div class="col-md-2">
            <ValidationProvider :bails="false" v-slot="{ errors }" name="هاتف3">
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="هاتف3"
                v-model="phone3"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
          <label class="col-md-1"> فاكس</label>
          <div class="col-md-3">
            <ValidationProvider
              rules="numeric"
              :bails="false"
              v-slot="{ errors }"
              name="فاكس"
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="قاكس"
                v-model="fax"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2">العنوان</label>
          <div class="col-md-10">
            <ValidationProvider
              rules="required"
              :bails="false"
              v-slot="{ errors }"
              name="العنوان "
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="العنوان "
                v-model="address"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-1">
          <label class="col-md-2">ص.ب</label>
          <div class="col">
            <ValidationProvider :bails="false" v-slot="{ errors }" name="ص.ب ">
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="ص.ب "
                v-model="POBox"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
          <label class="col-md-2">المدينة</label>
          <div class="col">
            <ValidationProvider
              :bails="false"
              v-slot="{ errors }"
              name="المدينة "
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder=" المدينة"
                v-model="POBox"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
          <label class="col-md-2">رقم المدينة</label>
          <div class="col">
            <ValidationProvider
              :bails="false"
              v-slot="{ errors }"
              name="رقم المدينة "
            >
              <input
                type="text"
                class="form-control "
                id="inputCode"
                placeholder="رقم المدينة"
                v-model="POBox"
              />
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </ValidationProvider>
          </div>
        </div>
        <div class="">
          <div class="text-center">
            <button
              class=" btn btn-outline-primary mt-3"
              style="margin-left:5px"
              type="reset"
            >
              اعادة تعيين
            </button>
            <button class="btn btn-primary mt-3" type="submit">ارسال</button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { ar } from "vuejs-datepicker/dist/locale";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import PictureInput from "vue-picture-input";

export default {
  components: {
    Datepicker,
    Multiselect,
    PictureInput,
  },
  data() {
    return {
      POBox: "",
      phone1: "",
      phone2: "",
      phone3: "",
      fax: "",
      inputName: "",
      qualification: "",
      priorexperiences: "",
      selectImage: "",
      officeNumber: "",
      Socialstatus: "",
      startDate: "",
      nationality: "",
      gender: "",
      division: "",
      bankAccountNumber: "",
      email: "",
      address: "",
      ar: ar,
      selected: null,
      options: ["list", "of", "options"],
    };
  },
  methods: {
    onSubmit() {
      alert("Form has been submitted!");
    },
    reset() {
      (this.inputTaxNumber = ""),
        (this.inputCode = ""),
        (this.inputName = ""),
        (this.inputSalesPerson = ""),
        (this.name = ""),
        (this.startDate = ""),
        (this.gender = ""),
        (this.inputVirtualCurrency = ""),
        (this.inputNationality = ""),
        (this.inputGroupType = "");
    },
  },
};
</script>

<style>
.fa-plus {
  color: #17a2b8;
  padding: 5px;
}
.error {
  color: red;
}
</style>
