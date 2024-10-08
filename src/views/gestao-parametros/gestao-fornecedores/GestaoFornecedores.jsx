import {React, useEffect, useState} from 'react'
import {useOutletContext} from 'react-router-dom';
import SelectBox from '../../../components/input/select/Select';
import {Textbox} from '../../../components/input/text-box/Textbox';
import {Button} from '../../../components/input/button/Button';
import GestaoConteudo from '../../gestao-conteudo/GestaoConteudo';
import './GestaoFornecedores.scss';

function GestaoFornecedores() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  useEffect(() => {
    setSubSecao('Fornecedores');
    setModoEdicao(['Fornecedores','',''])
  }, [setSubSecao, setModoEdicao]);


  return (
    <>
      <div className="area-superior-fornecedor">
        <div className="input-container-pai">
          <div className="input-container-fornecedores">
            <SelectBox
              placeholder="Diretoria"
            />
            <SelectBox
              placeholder="Fornecedor"
            />
            <Textbox
              label="Nome do Contato"
              tipoInput={"texto"}
            />
            <Textbox
              label="Site (Download Conteúdo)"
              tipoInput={"texto"}
            />
            
            <div className="button-container">
            <Button 
              className="search-button" 
              dataTooltip="Pesquisar"
            />
            <Button 
              className="delete-button" 
              dataTooltip="Limpar Filtros"
            />
            <Button
              className="settings-button" 
              dataTooltip="Mais Filtros"
              onClick={() => setModoEdicao([modoEdicao[0], "Mais Filtros e Configurações",''])}
              path="/gestaoparametros/edicao"
            />
            <Button
              className="add-button" 
              dataTooltip="Inserir Novo"
              onClick={() => setModoEdicao([modoEdicao[0], "Inserir Novo",''])}
              path="/gestaoparametros/edicao"
            />
            </div>  
          </div>
        </div>
      </div>
      <GestaoConteudo
        view="gestao-fornecedores"
      />
    </>
  )
}

export default GestaoFornecedores



