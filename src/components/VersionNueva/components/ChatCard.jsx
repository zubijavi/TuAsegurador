import Icon from "./Icon";

export default function ChatCard() {
    return (
        <div className="flex items-center justify-between gap-space-md p-space-md lg:p-space-lg rounded-xl bg-surface-container-high lg:bg-surface-container shadow-sm">
            <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-secondary lg:bg-secondary/15 flex items-center justify-center shrink-0">
                    <Icon
                        name="support_agent"
                        className="text-[24px] text-on-secondary lg:text-secondary"
                    />
                </div>

                <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                        ¿Dudas con tu cotización?
                    </span>

                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Un asesor te asiste por chat al instante.
                    </span>
                </div>
            </div>

            <a
                href="#"
                className="inline-flex items-center gap-space-xs px-space-md lg:px-space-lg py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:opacity-95 transition-opacity shrink-0"
            >
                <Icon name="forum" className="text-[18px]" />
                <span>Hablar</span>
            </a>
        </div>
    );
}