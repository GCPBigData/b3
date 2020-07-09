package com.multbroker.empresa.repository;
import com.multbroker.models.Empresa;
import com.multbroker.models.Negociacao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Integer>{

    @Transactional(readOnly=true)
    public List<Empresa> findAllByOrderByNome();

/*
    @Transactional(readOnly=true)
    @Query("SELECT DISTINCT obj FROM Empresa obj INNER JOIN obj.negociacoes nego WHERE obj.nome LIKE %:nome% AND nego IN :negociacoes")
    Page<Empresa> findDistinctByNomeNegociacao(@Param("nome") String nome, @Param("negociacaoes") List<Negociacao> negociacoes, Pageable pageRequest);
*/

}
