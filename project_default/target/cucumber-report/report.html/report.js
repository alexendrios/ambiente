$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/001_login.feature");
formatter.feature({
  "name": "Login",
  "description": "  Eu como um standard_user do site\n  Quero logar na aplicação\n  Para fazer a compra de 3 ou mais itens",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "CT - 001 - 006 - Logar na Aplicação",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_001_006_login"
    }
  ]
});
formatter.step({
  "name": "ao informar ao Sistema as Credenciais usuário \u003cuser\u003e e senha \u003cpassword\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "é verificado que está logado no Sistema visulaizando a mensagem \u003cmensagem_logada\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "mensagem_logada"
      ]
    },
    {
      "cells": [
        "\u0027\u0027",
        "\u0027\u0027",
        "\u0027Epic sadface: Username is required\u0027"
      ]
    },
    {
      "cells": [
        "\u0027standard_user\u0027",
        "\u0027\u0027",
        "\u0027Epic sadface: Password is required\u0027"
      ]
    },
    {
      "cells": [
        "\u0027\u0027",
        "\u0027secret_sauce\u0027",
        "\u0027Epic sadface: Username is required\u0027"
      ]
    },
    {
      "cells": [
        "\u0027standard_user\u0027",
        "\u002712345678\u0027",
        "\u0027Epic sadface: Username and password do not match any user in this service\u0027"
      ]
    },
    {
      "cells": [
        "\u0027frudo_pinho\u0027",
        "\u002712345678\u0027",
        "\u0027Epic sadface: Username and password do not match any user in this service\u0027"
      ]
    },
    {
      "cells": [
        "\u0027standard_user\u0027",
        "\u0027secret_sauce\u0027",
        "\u0027Products\u0027"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CT - 001 - 006 - Logar na Aplicação",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_001_006_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao informar ao Sistema as Credenciais usuário \u0027\u0027 e senha \u0027\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.ao_informar_ao_Sistema_as_Credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "é verificado que está logado no Sistema visulaizando a mensagem \u0027Epic sadface: Username is required\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.é_verificado_que_está_logado_no_Sistema_visulaizando_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 001 - 006 - Logar na Aplicação",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_001_006_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao informar ao Sistema as Credenciais usuário \u0027standard_user\u0027 e senha \u0027\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.ao_informar_ao_Sistema_as_Credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "é verificado que está logado no Sistema visulaizando a mensagem \u0027Epic sadface: Password is required\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.é_verificado_que_está_logado_no_Sistema_visulaizando_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 001 - 006 - Logar na Aplicação",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_001_006_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao informar ao Sistema as Credenciais usuário \u0027\u0027 e senha \u0027secret_sauce\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.ao_informar_ao_Sistema_as_Credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "é verificado que está logado no Sistema visulaizando a mensagem \u0027Epic sadface: Username is required\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.é_verificado_que_está_logado_no_Sistema_visulaizando_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 001 - 006 - Logar na Aplicação",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_001_006_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao informar ao Sistema as Credenciais usuário \u0027standard_user\u0027 e senha \u002712345678\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.ao_informar_ao_Sistema_as_Credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "é verificado que está logado no Sistema visulaizando a mensagem \u0027Epic sadface: Username and password do not match any user in this service\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.é_verificado_que_está_logado_no_Sistema_visulaizando_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 001 - 006 - Logar na Aplicação",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_001_006_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao informar ao Sistema as Credenciais usuário \u0027frudo_pinho\u0027 e senha \u002712345678\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.ao_informar_ao_Sistema_as_Credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "é verificado que está logado no Sistema visulaizando a mensagem \u0027Epic sadface: Username and password do not match any user in this service\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.é_verificado_que_está_logado_no_Sistema_visulaizando_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 001 - 006 - Logar na Aplicação",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_001_006_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao informar ao Sistema as Credenciais usuário \u0027standard_user\u0027 e senha \u0027secret_sauce\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStep.ao_informar_ao_Sistema_as_Credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "é verificado que está logado no Sistema visulaizando a mensagem \u0027Products\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.é_verificado_que_está_logado_no_Sistema_visulaizando_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/002_filtrar_produtos.feature");
formatter.feature({
  "name": "Filtrar Produtos",
  "description": "  Eu como um standard_user do site\n  Deve ser possível filtrar os itens do preço mais baixo para o preço mais alto\n  Para fazer a compra de 3 ou mais itens",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "CT - 007 - 010 - Filtrar Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_007_011_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u003ctipo_ordenacao\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "visualiza - se os produtos ordenados \u003cprodutos_ordenados\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "tipo_ordenacao",
        "produtos_ordenados"
      ]
    },
    {
      "cells": [
        "\u0027Name (A to Z)\u0027",
        "\u0027true\u0027"
      ]
    },
    {
      "cells": [
        "\u0027Name (Z to A)\u0027",
        "\u0027true\u0027"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "\u0027true\u0027"
      ]
    },
    {
      "cells": [
        "\u0027Price (high to low)\u0027",
        "\u0027true\u0027"
      ]
    }
  ]
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 007 - 010 - Filtrar Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_007_011_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Name (A to Z)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualiza - se os produtos ordenados \u0027true\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "FiltroStep.visualiza_se_os_produtos_ordenados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 007 - 010 - Filtrar Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_007_011_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Name (Z to A)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualiza - se os produtos ordenados \u0027true\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "FiltroStep.visualiza_se_os_produtos_ordenados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 007 - 010 - Filtrar Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_007_011_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualiza - se os produtos ordenados \u0027true\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "FiltroStep.visualiza_se_os_produtos_ordenados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 007 - 010 - Filtrar Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_007_011_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (high to low)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualiza - se os produtos ordenados \u0027true\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "FiltroStep.visualiza_se_os_produtos_ordenados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/003_comprar_produtos.feature");
formatter.feature({
  "name": "Comprar  Produtos",
  "description": "  Eu como um standard_user do site\n  Deve ser possível filtrar os itens do preço mais baixo\n  Deve ser possível remover quaisquer itens do carrinho antes de fazer checkout.\n  Os campos First Name, Last name e Zip/Postal code são de preenchimento obrigatório.\n  Deve ser possível cancelar a compra antes de finalizar.",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "CT - 0012 - 018 - Remover Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0012_018_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u003ctipo_ordenacao\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "ao escolher a quantidade de produtos \u003cquantidade\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.step({
  "name": "remover a quantidade de produtos \u003cqtd_remover\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "deve se visualizada a quantidade de produtos na tela \u003cqtd_produt_tela\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "tipo_ordenacao",
        "quantidade",
        "qtd_remover",
        "qtd_produt_tela"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "1",
        "1",
        "0"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "2",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "3",
        "1",
        "2"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "4",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "5",
        "4",
        "1"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "6",
        "3",
        "3"
      ]
    }
  ]
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0012 - 018 - Remover Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0012_018_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 1",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover a quantidade de produtos 1",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.remover_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve se visualizada a quantidade de produtos na tela 0",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.deve_se_visualizada_a_quantidade_de_produtos_na_tela(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0012 - 018 - Remover Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0012_018_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 2",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover a quantidade de produtos 1",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.remover_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve se visualizada a quantidade de produtos na tela 1",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.deve_se_visualizada_a_quantidade_de_produtos_na_tela(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0012 - 018 - Remover Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0012_018_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 3",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover a quantidade de produtos 1",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.remover_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve se visualizada a quantidade de produtos na tela 2",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.deve_se_visualizada_a_quantidade_de_produtos_na_tela(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0012 - 018 - Remover Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0012_018_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 4",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover a quantidade de produtos 3",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.remover_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve se visualizada a quantidade de produtos na tela 1",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.deve_se_visualizada_a_quantidade_de_produtos_na_tela(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0012 - 018 - Remover Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0012_018_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 5",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover a quantidade de produtos 4",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.remover_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve se visualizada a quantidade de produtos na tela 1",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.deve_se_visualizada_a_quantidade_de_produtos_na_tela(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0012 - 018 - Remover Produtos",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0012_018_Filtrar_Produtos"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 6",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remover a quantidade de produtos 3",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.remover_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve se visualizada a quantidade de produtos na tela 3",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.deve_se_visualizada_a_quantidade_de_produtos_na_tela(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "CT - 0019 - 020 - Realizar a Compra",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0019_20_Realizar_Compra"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u003ctipo_ordenacao\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "ao escolher a quantidade de produtos \u003cquantidade\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.step({
  "name": "ao prencher o primeiro nome \u003cfistname\u003e, o sobrenome \u003clastname\u003ee o CEP\u003czipPostal\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "ao decidir se irá finalizar a operação \u003coperacao\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "visualizo a seguinte nebsagen \u003cmensagem\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "tipo_ordenacao",
        "quantidade",
        "fistname",
        "lastname",
        "zipPostal",
        "operacao",
        "mensagem"
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "3",
        "\"Ricardo\"",
        "\"Pinheiro\"",
        "\"86820-000\"",
        "\"false\"",
        "\"Products\""
      ]
    },
    {
      "cells": [
        "\u0027Price (low to high)\u0027",
        "3",
        "\"Ricardo\"",
        "\"Pinheiro\"",
        "\"86820-000\"",
        "\"true\"",
        "\"THANK YOU FOR YOUR ORDER\""
      ]
    }
  ]
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0019 - 020 - Realizar a Compra",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0019_20_Realizar_Compra"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 3",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao prencher o primeiro nome \"Ricardo\", o sobrenome \"Pinheiro\"e o CEP\"86820-000\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_prencher_o_primeiro_nome_o_sobrenome_e_o_CEP(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao decidir se irá finalizar a operação \"false\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_decidir_se_irá_finalizar_a_operação(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a seguinte nebsagen \"Products\"",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.visualizo_a_seguinte_nebsagen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logar na Aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ao logar na aplicação com as credenciais usuário \"standard_user\" e senha \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "FiltroStep.ao_logar_na_aplicação_com_as_credenciais_usuário_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CT - 0019 - 020 - Realizar a Compra",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@CT_0019_20_Realizar_Compra"
    }
  ]
});
formatter.step({
  "name": "ao selecionar os produtos pelo tipo \u0027Price (low to high)\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltroStep.ao_selecionar_os_produtos_pelo_tipo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao escolher a quantidade de produtos 3",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_escolher_a_quantidade_de_produtos(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao checar no carrino",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_checar_no_carrino()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao prencher o primeiro nome \"Ricardo\", o sobrenome \"Pinheiro\"e o CEP\"86820-000\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_prencher_o_primeiro_nome_o_sobrenome_e_o_CEP(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ao decidir se irá finalizar a operação \"true\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarStep.ao_decidir_se_irá_finalizar_a_operação(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a seguinte nebsagen \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Então "
});
formatter.match({
  "location": "ComprarStep.visualizo_a_seguinte_nebsagen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", null);
formatter.after({
  "status": "passed"
});
});