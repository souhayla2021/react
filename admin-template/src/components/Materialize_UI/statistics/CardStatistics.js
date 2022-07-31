import React from 'react';

export const CardStatistics = (props) => {
  return (
    <div className="section center">
      <div className="row">
        {props.cards.map((card) => {
          return (
            <div className={`col ${card.col_class}`}>
              <div className={`card-panel ${card.card_panel_class}`}>
                <i className={card.icon_class}>{card.icon}</i>
                <h5>{card.criterion}</h5>
                <h3 className="count">{card.count}</h3>
                <div className={`progress ${card.progress_bar_class}`}>
                  <div
                    className={`determinate ${card.determinate_class}`}
                    style={{ width: `${card.progress_rate}` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
