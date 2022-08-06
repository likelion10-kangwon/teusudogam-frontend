import { css, useTheme } from '@emotion/react';
import React, { useState } from 'react';

import BadgeEvaluationBox from './badge-evaluation-box';

import tempBadgeImage from 'assets/mock/streamer/nokduro.png';
import Title from 'components/title';

export default function BadgeForumBox() {
    const theme = useTheme();

    const evaluations = [
        {
            image: tempBadgeImage,
            name: '화난 왁두',
            condition: '우왁굳 화내게 하기',
            like: 320,
            dislike: 20,
            comment: 4,
        },
        {
            image: tempBadgeImage,
            name: '웃는 왁두',
            condition: '우왁굳 웃기기',
            like: 120,
            dislike: 10,
            comment: 2,
        },
    ];

    const [currentEvaluation, setCurrentEvaluation] = useState(null);

    return (
        <div>
            <Title> 뱃지 게시판</Title>

            <div
                // 게시글 전체 컨테이너
                css={css`
                    background-color: rgba(0, 0, 0, 0.2);

                    width: 1000px;
                    height: 400px;

                    color: ${theme.colors.white};
                    border-radius: 8px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    row-gap: 16px;

                    padding: 16px;

                    margin: 0 auto;
                `}
            >
                {evaluations.map((evaluation) => (
                    <BadgeEvaluationBox
                        onClick={() => {
                            setCurrentEvaluation(evaluation);
                        }}
                        key={`eval-${evaluation.name}`}
                        name={evaluation.name}
                        condition={evaluation.condition}
                        image={evaluation.image}
                        like={evaluation.like}
                        dislike={evaluation.dislike}
                        comment={evaluation.comment}
                        enabled={currentEvaluation === evaluation}
                    />
                ))}
            </div>
        </div>
    );
}