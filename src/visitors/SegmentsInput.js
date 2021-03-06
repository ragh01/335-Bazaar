import React from 'react';
import { translate, SelectArrayInput } from 'admin-on-rest';

import segments from '../segments/data';

const SegmentsInput = ({ translate, ...rest }) => (
    <SelectArrayInput {...rest} choices={segments.map(segment => ({ id: segment.id, name: translate(segment.name) }))} />
);

const TranslatedSegmentsInput = translate(SegmentsInput);

TranslatedSegmentsInput.defaultProps = {
    addField: true,
    source: 'groups',
};

export default TranslatedSegmentsInput;
