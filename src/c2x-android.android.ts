import { Common, 
    DeviceListener, 
    TransactionListener, 
    Environment, 
    TransactionRequest, 
    BaudRate, Parity, StopBits, DataBits } from './c2x-android.common';
import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";

let c2x = require("nativescript-c2x-android").c2x;
declare var com: any;
declare var context: android.content.Context;

export class C2xAndroid extends Common {
    

    constructor(){
        super();
    }
//card information
    public getCardType(): string{
        var cardType = new com.heartlandpaymentsystems.library.entities.Card;
        return cardType.getCardType();
    }

    public Card(num: string, cvv: string, expMonth: number, expYear: number){
        var CardInfo = new com.heartlandpaymentsystems.library.entities.Card;
        CardInfo.Card(num, cvv, expMonth, expYear);
    }

}

export class C2XDevice{
    public device = com.heartlandpaymentsystems.library.terminals.c2x.C2XDevice.C2XDevice(android.content.Context, ConnectionConfig);

    //public C2XDevice(){
        //var device = 
    //    this.device.C2XDevice(context, connConfig);
    //}

    public setDeviceListener(devicelistener: DeviceListener){
        this.device.setDeviceListener(devicelistener);
    }
    public setTransactionListener(transactionlistener: TransactionListener){
        this.device.setTransactionListener(transactionlistener);
    }

    public initialize(){
        this.device.initialize();
    }

    public connect(bleDevice: android.bluetooth.BluetoothDevice){
        this.device.connect(bleDevice);
    }

    public disconnect(){
        this.device.disconnect();
    }

    public getDeviceInfo(){
        this.device.getDeviceInfo();
    }

    public doTransaction(transRequest: TransactionRequest){
        this.device.doTransaction(transRequest);
    }
    

}

export class ConnectionConfig {
    public connConfig = com.heartlandpaymentsystems.library.terminals.ConnectionConfig;

    public setIpAddress(ipAddress: string)
    {
        this.connConfig.setIpAddress(ipAddress);
    }

    public setPort(port: string)
    {
        this.connConfig.setPort(port);
    }

    public setBaudRate(baudRate: BaudRate)
    {
        this.connConfig.setBaudRate(baudRate);
    }

    public setParity(parity: Parity) 
    {
        this.connConfig.setParity(parity);
    }

    public setStopBits(stopBits: StopBits) 
    {
        this.connConfig.setStopBits(stopBits);
    }

    public setDataBits(dataBits: DataBits) 
    {
        this.connConfig.setDataBits(dataBits);
    }

    public setTimeout(timeout: string) 
    {
        this.connConfig.setTimeout(timeout);
    }

    public setSecretApiKey(secretApiKey: string) 
    {
        this.connConfig.setSecretApiKey(secretApiKey);
    }

    public setUsername(username: string) 
    {
        this.connConfig.setUsername(username);
    }

    public setLicenseId(licenseId: string) 
    {
        this.connConfig.setLicenseId(licenseId);
    }

    public setSiteId(siteId: string) 
    {
        this.connConfig.setSiteId(siteId);
    }

    public setPassword(password: string) 
    {
        this.connConfig.setPassword(password);
    }

    public setDeviceId(deviceId: string) 
    {
        this.connConfig.setDeviceId(deviceId);
    }

    public setEnvironment(environment: Environment) 
    { 
        this.connConfig.setEnvironment(environment); 
    }

    
}



