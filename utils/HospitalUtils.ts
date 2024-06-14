import { IPlan } from "@/models/plan";
import { createHospitalInput } from "@/schemas/Hospitals/CreateHospitalSchema";
import { addPlan } from "./seeder";
import { IHospital } from "@/models/hospital";
import { MultiValue } from "react-select";

export interface PlanValue {
  value: {
    name: string;
    id: number;
  };
}

export const createPlans = (
  plans: createHospitalInput["plans"],
  plansRef: IPlan[]
) => {
  let newPlan = plansRef;
  const plansFiltered = plans.filter((plan) => {
    return !plansRef.some((p) => p.name === plan.value.name);
  });
  if (plansFiltered.length > 0) {
    plansFiltered.forEach((plan) => {
      newPlan = addPlan({
        plan: { id: plan.value.id, name: plan.value.name },
        plansRef: newPlan,
      });
    });
    return newPlan;
  } else {
    return plansRef;
  }
};

export const paginateHospitals = (
  hospitals: IHospital[],
  currentPage: number,
  query: string
) => {
  const itemsPerPage = 3;
  let start = (currentPage - 1) * itemsPerPage;
  if (start < 0) start = 0;
  const end = start + itemsPerPage;

  let paginatedHospitals = hospitals.slice(start, end);
  let totalPages = Math.ceil(hospitals.length / itemsPerPage);

  if (query === "") {
    paginatedHospitals = hospitals.slice(start, end);
    totalPages = Math.ceil(hospitals.length / itemsPerPage);
  }

  return { paginatedHospitals, totalPages };
};

export const updateOptions = (value: MultiValue<PlanValue>, plans: IPlan[]) => {
  const newOption = {
    ...value[value.length - 1],
    value: {
      id: value.length + plans.length,
      name: value[value.length - 1].value,
    },
  };
  const newValue = value.map((val) => {
    if (val.value.id === value[value.length - 1].value.id) {
      return newOption;
    }
    return val;
  });
  return newValue;
};
