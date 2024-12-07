import { Button, Heading, Paragraph } from 'daskis-ui-kit';
import cls from './AnalyticsPage.module.scss';
import {
    AnalyticsAmount,
    AnalyticsCount,
    AnalyticsEffect,
    AnalyticsPercent,
    AnalyticsSpeed,
    AnalyticsTime,
    AnalyticsTraffic,
    AnalyticsTransport,
} from '@/entities/analytics';
import { useState } from 'react';
import { classNames } from '@/shared/lib';

export const AnalyticsPage = () => {
    const [tab, setTab] = useState<0 | 1>(0);
    return (
        <div className={cls.wrapper}>
            <Heading size="h3" className={cls.title}>
                Аналитика
            </Heading>
            <div className={cls.body}>
                <ul className={cls.list}>
                    <li
                        onClick={() => {
                            setTab(0);
                        }}
                        className={classNames(
                            cls.listItem,
                            {
                                [cls.active]: tab === 0,
                            },
                            [],
                        )}
                    >
                        <Paragraph size="h1" className={cls.bold}>
                            Оценка эффективности
                        </Paragraph>
                    </li>
                    <li
                        onClick={() => {
                            setTab(1);
                        }}
                        className={classNames(
                            cls.listItem,
                            {
                                [cls.active]: tab === 1,
                            },
                            [],
                        )}
                    >
                        <Paragraph size="h1" className={cls.bold}>
                            Статистика
                        </Paragraph>
                    </li>
                </ul>
                {tab === 0 ? (
                    <div className={cls.tab}>
                        <div className={cls.grid}>
                            <AnalyticsSpeed />
                            <AnalyticsCount />
                            <AnalyticsEffect />
                            <AnalyticsPercent />
                        </div>
                        <div className={cls.buttons}>
                            <Button>
                                <Paragraph color="white">Сгенерировать отчёт о пробках</Paragraph>
                            </Button>
                            <Button color="warning" borderColor="warning">
                                <Paragraph color="white">Сгенерировать отчёт о ремонтах </Paragraph>
                            </Button>
                            <Button>
                                <Paragraph color="white">Сгенерировать о успешности действий </Paragraph>
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={cls.tab}>
                        <div className={cls.grid}>
                            <AnalyticsAmount />
                            <AnalyticsTraffic />
                            <AnalyticsTime />
                            <AnalyticsTransport />
                        </div>
                        {/* <div className={cls.buttons}>
                            <Button>
                                <Paragraph color="white">Сгенерировать отчёт о пробках</Paragraph>
                            </Button>
                            <Button color="warning" borderColor="warning">
                                <Paragraph color="white">Сгенерировать отчёт о ремонтах </Paragraph>
                            </Button>
                            <Button>
                                <Paragraph color="white">Сгенерировать о успешности действий </Paragraph>
                            </Button>
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};
