import LLMSelect from '@/components/llm-select';
import { useTranslate } from '@/hooks/commonHooks';
import { Form, InputNumber } from 'antd';
import { useSetLlmSetting } from '../hooks';
import { IOperatorForm } from '../interface';

const RewriteQuestionForm = ({ onValuesChange, form }: IOperatorForm) => {
  const { t } = useTranslate('chat');
  useSetLlmSetting(form);

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      onValuesChange={onValuesChange}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        name={'llm_id'}
        label={t('model', { keyPrefix: 'chat' })}
        tooltip={t('modelTip', { keyPrefix: 'chat' })}
      >
        <LLMSelect></LLMSelect>
      </Form.Item>
      <Form.Item
        label={t('loop', { keyPrefix: 'flow' })}
        name="loop"
        initialValue={1}
      >
        <InputNumber />
      </Form.Item>
    </Form>
  );
};

export default RewriteQuestionForm;
