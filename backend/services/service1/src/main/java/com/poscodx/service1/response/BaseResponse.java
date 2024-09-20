package com.poscodx.service1.response;

public class BaseResponse<T> {

    private final int status;
    private final String message;
    private final T data;

    public int getStatus() {
		return status;
	}

	public String getMessage() {
		return message;
	}

	public T getData() {
		return data;
	}

	public BaseResponse(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}