import { Observable, EventData } from 'tns-core-modules/data/observable';
import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";

let c2x = require("nativescript-c2x-android").c2x;
declare var com: any;

//tsys payments
export class TerminalInfo extends com.tsys.payments.library.domain.TerminalInfo{}
export class CardholderInteractionRequest extends com.tsys.payments.library.domain.CardholderInteractionRequest{}
export class TransactionRequest extends com.tsys.payments.library.domain.TransactionRequest{}
export class TransactionConfig extends com.tsys.payments.library.domain.TransactionConfiguration{}
export class GatewayConfig extends com.tsys.payments.library.domain.GatewayConfiguration{}
export class TerminalConfig extends com.tsys.payments.library.domain.TerminalConfiguration{}
export class TransactionResponse extends com.tsys.payments.library.domain.TransactionResponse{}
export class ConnectionType extends com.tsys.payments.library.enums.ConnectionType{}
export class TransactionManager extends com.tsys.payments.transaction.TransactionManager{}
export class LibraryConfigHelper extends com.tsys.payments.library.utils.LibraryConfigHelper{}

//heartland
export class DeviceListener extends com.heartlandpaymentsystems.library.terminals.DeviceListener{}
export class TransactionStatus extends com.heartlandpayments.library.enums.TransactionStatus{}
export class TerminalResponse extends com.heartlandpaymentsystems.library.terminals.entities.TerminalResponse{}
export class TransactionListener extends com.heartlandpaymentsystems.library.terminals.TransactionListener{}
export class BluetoothReceiver extends com.heartlandpaymentsystems.library.terminals.receivers.BluetoothReceiver{}
export class C2XDevice extends com.heartlandpaymentsystems.library.terminals.c2x.C2XDevice{}

export enum Environment{
    TEST,
    PRODUCTION
}

export enum ApplicationCryptogramType{
    TC,
    ARQC
}

export enum ConnectionMode{
    SERIAL,
    TCP_IP,
    SSL_TCP,
    HTTP,
    BLUETOOTH
}

export enum BaudRate{
    RATE_38400,
    RATE_57600,
    RATE_19200,
    RATE_115200
}

export enum Parity{
    NONE,
    ODD,
    EVEN
}

export enum StopBits{
    ONE,
    TWO
}

export enum DataBits{
    SEVEN,
    EIGHT
}


export interface IDeviceResponse{}


export interface DeviceListener{
    onBluetoothDeviceList(callback: (deviceList: Array<android.bluetooth.BluetoothDevice>) => void): Promise<any>;
    onConnected(callback: (terminalInfo: TerminalInfo) => void): Promise<any>;
    onError(callback: (Error: Error)=> void): Promise<any>;
    onTerminalInfoReceived(callback: (terminalInfo: TerminalInfo) => void): Promise<any>;
}

export interface IDevice {
    doTransaction(callback: (transactionRequest: TransactionRequest) => void): Promise<any>;
}


export interface IDeviceInterface{
    getStatus(): string;
    setStatus(callback: (status: string) => void): Promise<any>;
    getCommand(): string;
    setCommand(callback: (command: string) => void): Promise<any>;
    getVersion(): string;
    setVersion(callback: (version: string) => void): Promise<any>;
    getDeviceResponseCode(): string;
    setDeviceResponseCode(callback: (deviceResponseCode: string) => void): Promise<any>;
    getDeviceResponseMessage(): string;
    setDeviceResponseMessage(callback: (deviceResponseMessage: string) => void): Promise<any>;
    getStoredResponse(): boolean;
    setStoredResponse(callback: (storedResponse: boolean) => void): Promise<any>;
    getTransactionId(): string;
    setTransactionId(callback: (transactionId: string) => void): Promise<any>;
    getLastResponseTransactionId(): string;
    setLastResponseTransactionId(callback: (lastResponseTransactionId: string) => void): Promise<any>;
    toString(): string;

}

export interface TransactionListener{
    onStatusUpdate(callback: (transactionStatus: TransactionStatus) => void): Promise<any>;
    onCardholderInteractionRequested(callback: (cardholderInteractionRequest: CardholderInteractionRequest) => void): Promise<any>;
    onTransactionComplete(callback: (transaction: TerminalResponse) => void): Promise<any>;
    onError(callback: (error: Error) => void): Promise<any>;
}

export class Common extends Observable {

}
