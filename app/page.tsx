"use client";
import {
  addHospital,
  addPlan,
  createHospitals,
  createPlans,
} from "@/utils/seeder";
import { useCallback, useEffect, useState } from "react";
import FlexContainer from "@/components/ContainerFlex";
import { H1, H2 } from "@/components/Typography";
import Search from "@/components/Search";
import HospitalCard from "@/components/Hospital/HospitalCard/HospitalCard";
import { useDebounce } from "use-debounce";
import Button from "@/components/Button";
import CreateHospitalModal from "@/components/Hospital/CreateHospitalModal/CreateHospitalModal";
import { createHospitalInput } from "@/schemas/Hospitals/CreateHospitalSchema";
import { IHospital } from "@/models/hospital";

export default function Home() {
  const [hospitals, setHospitals] = useState(createHospitals());
  const [plans, setPlans] = useState(createPlans());
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
  const [query, setQuery] = useState("");
  const [debounceQuery] = useDebounce(query, 800);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCreate = (data: createHospitalInput) => {
    if (data.plans && data.plans.length > 0) {
      const newPlans = data.plans.filter((plan) => {
        return !plans.some((p) => p.name === plan.value.name);
      });
      if (newPlans.length > 0) {
        newPlans.forEach((plan) => {
          setPlans(
            addPlan({
              plan: { id: plan.value.id, name: plan.value.name },
              plansRef: plans,
            })
          );
        });
      }
    }

    const hospital: IHospital = {
      id: hospitals.length + 1,
      name: data.name,
      location: data.location,
      plans: data.plans.map((plan) => ({
        id: plan.value.id,
        name: plan.value.name,
      })),
    };

    setHospitals(addHospital({ hospital, hospitalsRef: hospitals }));
    setFilteredHospitals(hospitals);
    setQuery("");
    setIsOpen(false);
  };

  const handleSearch = (query: string) => {
    if (query === "") {
      setFilteredHospitals(hospitals);
    } else {
      setQuery(query);
    }
  };

  const filterHospitals = useCallback(
    (query: string) => {
      const filtered = hospitals.filter((hospital) => {
        return (
          hospital.name.toLowerCase().includes(query.toLowerCase()) ||
          hospital.plans.some((plan) =>
            plan.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      });
      setFilteredHospitals(filtered);
    },
    [hospitals]
  );

  useEffect(() => {
    filterHospitals(debounceQuery);
  }, [debounceQuery, filterHospitals]);

  return (
    <FlexContainer
      direction="column"
      width="100%"
      justify="center"
      align="center"
      height="100vh"
    >
      <H1>Hospital Search</H1>
      <H2>Search Hospital by name or plan.</H2>
      <FlexContainer gap="10px" width="100%" justify="center">
        <Search
          placeholder="Search Hopistals/Plans..."
          onSearch={handleSearch}
        />
        <Button onClick={handleClick}>Create new Hospital</Button>
      </FlexContainer>

      <FlexContainer height="50%">
        <ul>
          {filteredHospitals.map((hospital) => (
            <HospitalCard
              key={hospital.id}
              id={hospital.id}
              name={hospital.name}
              location={hospital.location}
              plans={hospital.plans}
              hospitals={hospitals}
              setHospitals={setHospitals}
            />
          ))}
        </ul>
      </FlexContainer>
      <CreateHospitalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCreate={handleCreate}
        plans={plans}
      />
    </FlexContainer>
  );
}
