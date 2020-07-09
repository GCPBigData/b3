package com.multbroker.empresa.repository;

import java.util.List;

import com.multbroker.models.Seguimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface SeguimentoRepository extends JpaRepository<Seguimento, Integer> {

    @Transactional(readOnly=true)
    @Query("SELECT obj FROM Seguimento obj WHERE obj.empresa.id = :empresaId ORDER BY obj.descricao")
    public List<Seguimento> findSeguimentos(@Param("empresaId") Integer empresa_id);
}
