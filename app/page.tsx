"use client";
import { createHospitals, createPlans } from "@/utils/seeder";
import { useCallback, useEffect, useState } from "react";
import FlexContainer from "@/components/ContainerFlex";
import { H1, H2 } from "@/components/Typography";
import Search from "@/components/Search";
import HospitalCard from "@/components/Hospital/HospitalCard/HospitalCard";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [hospitals, setHospitals] = useState(createHospitals());
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
  const [query, setQuery] = useState("");
  const [debounceQuery] = useDebounce(query, 800);

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
      <Search placeholder="Search Hopistals/Plans..." onSearch={handleSearch} />
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
    </FlexContainer>
  );
}
