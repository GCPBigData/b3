package com.multbroker.users.exception;

public class SenhaIncorretaException extends Exception{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3941231574401681186L;

	// constrói um objeto NumeroNegativoException com a mensagem passada por parâmetro
    public SenhaIncorretaException(String msg){
        super(msg);
    }

    // contrói um objeto NumeroNegativoException com mensagem e a causa dessa exceção, utilizado para encadear exceptions
    public SenhaIncorretaException(String msg, Throwable cause){
        super(msg, cause);
    }

}
