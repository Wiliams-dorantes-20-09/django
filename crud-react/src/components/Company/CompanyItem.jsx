import React from "react";
import { useNavigate } from "react-router-dom";
import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ company, listCompanies }) => {
  const history = useNavigate();
  const handleDelete = async (companyId) => {
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">
          {company.name}
          <button onClick={() => history(`/updateCompany/${company.id}`)}
            className="ms-2 btn btn-sm btn-info">
            Actualizar
          </button>
        </h3>
        <p className="card-text">
          Fundación: <strong>{company.foundation}</strong>
        </p>
        <a href={company.website} target="_blank" rel="noopener noreferrer"
          className="btn btn-primary">
          Ir al sitio web
        </a>
        <button onClick={() => company.id && handleDelete(company.id)}
          className="btn btn-danger my-2">
          Eliminar Compañia
        </button>
      </div>
    </div>
  );
};
export default CompanyItem;