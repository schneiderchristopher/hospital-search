import { IHospital } from "@/models/hospital";
import { IPlan } from "@/models/plan";

// This is a mocked backend service that simulates the behavior of a real backend service.
// It contains functions that mimic the behavior of a real backend service.
// This service is used to seed the initial data for the application.
// Theres some functions here that I decided to not use in the application, but they are here for reference.

export function seedPlans() {
  const plans: IPlan[] = [
    {
      id: 1,
      name: "UniLorem",
    },
    {
      id: 2,
      name: "UniLipsom",
    },
    {
      id: 3,
      name: "DoremPlan",
    },
    {
      id: 4,
      name: "PlanLorem",
    },
    {
      id: 5,
      name: "PlanIpsum",
    },
  ];
  return plans;
}

export function seedHospitals() {
  const plans = seedPlans();
  const hospitals: IHospital[] = [
    {
      id: 1,
      name: "LoremHospitalCenter",
      location: "HOUSTON, TX",
      plans: [plans[0], plans[1]],
    },
    {
      id: 2,
      name: "IpsumHospitalCenter",
      location: "ATLANTA, GA",
      plans: [plans[1], plans[2]],
    },
    {
      id: 3,
      name: "DoremHospitalCenter",
      location: "ATLANTA, GA",
      plans: [plans[3], plans[4]],
    },
  ];
  return hospitals;
}

interface HospitalDTO {
  hospital: IHospital;
  hospitalsRef: IHospital[];
}

export function addHospital(dto: HospitalDTO) {
  if (dto.hospitalsRef.find((hospital) => hospital.id === dto.hospital.id))
    return dto.hospitalsRef;
  dto.hospitalsRef.push(dto.hospital);
  return dto.hospitalsRef;
}

export function removeHospital(dto: HospitalDTO) {
  return dto.hospitalsRef.filter((hospital) => hospital.id != dto.hospital.id);
}

function updateHospital(dto: HospitalDTO) {
  const index = dto.hospitalsRef.findIndex(
    (hospital) => hospital.id === dto.hospital.id
  );
  return dto.hospitalsRef[index];
}

interface PlanDTO {
  plan: IPlan;
  plansRef: IPlan[];
}

export function addPlan(dto: PlanDTO) {
  if (dto.plansRef.find((plan) => plan.id === dto.plan.id)) return dto.plansRef;
  dto.plansRef.push(dto.plan);
  return dto.plansRef;
}

function removePlan(dto: PlanDTO) {
  return dto.plansRef.filter((plan) => plan != dto.plan);
}

function updatePlan(dto: PlanDTO) {
  const index = dto.plansRef.findIndex((plan) => plan.id === dto.plan.id);
  return dto.plansRef[index];
}

interface PlanToHospitalDTO {
  plan: IPlan;
  hospital: IHospital;
}

function checkIfPlanExists(id: number, hospital: IHospital) {
  if (hospital.plans.find((plan) => plan.id === id) !== undefined) return true;
  return false;
}

function addPlanToHospital(dto: PlanToHospitalDTO) {
  if (checkIfPlanExists(dto.plan.id, dto.hospital))
    return dto.hospital.plans.push(dto.plan);
}

function removePlanFromHospital(dto: PlanToHospitalDTO) {
  if (dto.hospital.plans.find((plan) => plan.id === dto.plan.id)) {
    return dto.hospital.plans.filter((plan) => plan !== dto.plan);
  }
}
