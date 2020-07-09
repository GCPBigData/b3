package com.multbroker.users.exception;

public class EmailJaRegistradoException extends Exception {
	
	
	
    /**
	 * 
	 */
	private static final long serialVersionUID = -473298897182180349L;

	public EmailJaRegistradoException(String msg){
        super(msg);
    }

    public EmailJaRegistradoException(String msg, Throwable cause){
        super(msg, cause);
    }

}
