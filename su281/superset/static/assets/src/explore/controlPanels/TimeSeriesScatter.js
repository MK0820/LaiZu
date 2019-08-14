//superset\assets\src\explore\controlPanels\TimeSeriesScatter.js
import { t } from '@superset-ui/translation';
 
export default {
  controlPanelSections: [
      {
          label: t('NOT GROUPED BY'),  //控制块标题，可以有多个控制块，一块包含多个组件
          description: t('Use this section if you want to query atomic rows'), //描述
          expanded: true,
          controlSetRows: [
              ['all_columns'],  //使用的组件名
              ['row_limit', null],
          ],
      },
  ],
};