"use client";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import FlexContainer from "@/components/FlexContainer";
import Search from "@/components/Search";
import HospitalCard from "@/components/Hospital/HospitalCard/";
import Button from "@/components/Button";
import CreateHospitalModal from "@/components/Hospital/CreateHospitalModal";
import Pagination from "@/components/Pagination";
import { H1, H2 } from "@/components/Typography";
import { createHospitalInput } from "@/schemas/Hospitals/CreateHospitalSchema";
import { IHospital } from "@/models/hospital";
import { addHospital, seedHospitals, seedPlans } from "@/utils/seeder";
import { createPlans, paginateHospitals } from "@/utils/HospitalUtils";

export default function Home() {
  const [hospitals, setHospitals] = useState(seedHospitals());
  const [plans, setPlans] = useState(seedPlans());
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
  const [query, setQuery] = useState("");
  const [debounceQuery] = useDebounce(query, 800);

  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCreate = (data: createHospitalInput) => {
    if (data.plans && data.plans.length > 0) {
      setPlans(createPlans(data.plans, plans));
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
    setFilteredHospitals(
      hospitals.slice((currentPage - 1) * 3, currentPage * 3)
    );
    setCurrentPage(Math.ceil(hospitals.length / 3));
    setQuery("");
    setIsOpen(false);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
      const { paginatedHospitals, totalPages } = paginateHospitals(
        filtered,
        currentPage,
        query
      );
      if (currentPage > totalPages) setCurrentPage(totalPages);
      setTotalPages(totalPages);
      setFilteredHospitals(paginatedHospitals);
    },
    [hospitals, currentPage]
  );

  useEffect(() => {
    filterHospitals(debounceQuery);
  }, [debounceQuery, filterHospitals]);

  useEffect(() => {
    setTotalPages(Math.ceil(hospitals.length / 3));
  }, [hospitals.length]);

  return (
    <FlexContainer
      $direction="column"
      $width="100%"
      $justify="center"
      $align="center"
      $height="100vh"
    >
      <H1>Hospital Search</H1>
      <H2>Search Hospital by name or plan.</H2>
      <FlexContainer $gap="10px" $width="100%" $justify="center">
        <Search
          placeholder="Search Hopistals/Plans..."
          onSearch={handleSearch}
        />
        <Button onClick={handleClick}>Create new Hospital</Button>
      </FlexContainer>

      <FlexContainer $height="50%">
        <ul>
          {filteredHospitals?.map((hospital) => (
            <HospitalCard
              key={hospital.id + hospital.name}
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
      />
      <CreateHospitalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCreate={handleCreate}
        plans={plans}
      />
    </FlexContainer>
  );
}
