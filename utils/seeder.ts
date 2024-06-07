import { IHospital } from "@/models/hospital";
import { IPlan } from "@/models/plan";

function createPlans() {
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

function createHospitals() {
  const plans = createPlans();
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
}

interface HospitalDTO {
  hospital: IHospital;
  hospitalsRef: IHospital[];
}

function addHospital(dto: HospitalDTO) {
  dto.hospitalsRef.push(dto.hospital);
  return dto.hospitalsRef;
}

function removeHospital(dto: HospitalDTO) {
  return dto.hospitalsRef.filter((hospital) => hospital != dto.hospital);
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

function addPlan(dto: PlanDTO) {
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

function addPlanToHospital(dto: PlanToHospitalDTO) {
  if (dto.hospital.plans.find((plan) => plan.id === dto.plan.id)) {
    // TODO: Add Response
    return undefined;
  }
  return dto.hospital.plans.push(dto.plan);
}
