import { EventWidget } from '../core/EventWidget';
import { NativeElement } from '../core/Component';
import { checkIfNativeElement } from '../utils/helpers';
import addon from '../utils/addon';
import { QVariant, QVariantType } from './QVariant';
import { TimerType } from '../QtEnums/TimerType';

export abstract class NodeObject<Signals extends QObjectSignals> extends EventWidget<Signals> {
    inherits(className: string): boolean {
        return this.native.inherits(className);
    }
    setProperty(name: string, value: QVariantType): boolean {
        return this.native.setProperty(name, value);
    }
    property(name: string): QVariant {
        const nativeVariant = this.native.property(name);
        return new QVariant(nativeVariant);
    }
    setObjectName(objectName: string): void {
        this.native.setObjectName(objectName);
    }
    objectName(): string {
        return this.native.objectName();
    }
    dumpObjectTree(): void {
        this.native.dumpObjectTree();
    }
    dumpObjectInfo(): void {
        this.native.dumpObjectInfo();
    }
    setParent(parent: NodeObject<QObjectSignals>): void {
        if (parent != null) {
            const extern = parent.native.__external_qobject__();
            this.native.setParent(extern);
        } else {
            this.native.setParent(null);
        }
    }
    startTimer(intervalMS: number, timerType = TimerType.CoarseTimer): number {
        return this.native.startTimer(intervalMS, timerType);
    }
    killTimer(timerId: number): void {
        this.native.killTimer(timerId);
    }
}

export interface QObjectSignals {
    objectNameChanged: (objectName: string) => void;
}

export class QObject extends NodeObject<QObjectSignals> {
    native: NativeElement;
    constructor();
    constructor(nativeElement: NativeElement);
    constructor(parent: NodeObject<any>);
    constructor(arg?: NodeObject<any> | NativeElement) {
        let native;
        let parent;
        if (checkIfNativeElement(arg)) {
            native = arg as NativeElement;
        } else if (arg) {
            parent = arg as NodeObject<any>;
            native = new addon.QObject(parent.native);
        } else {
            native = new addon.QObject();
        }
        super(native);
        this.setNodeParent(parent);
        this.native = native;
    }
}
