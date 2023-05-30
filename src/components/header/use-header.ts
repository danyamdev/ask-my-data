import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { message, UploadProps } from 'antd';
import Cookies from 'js-cookie';

import dataAPI from '../../api/data';
import { API } from '../../constants';
import { useTableSelector } from '../../store/table/selectors';
import { fetchTableAction } from '../../store/table/actions';

const useHeader = () => {
  const dispatch = useDispatch();

  const { table } = useTableSelector();

  const options = useMemo(
    () =>
      table.headers?.map((h, i) => ({
        value: i,
        label: h,
      })),
    [table],
  );

  const logoName = useMemo(() => `${table.filename}${table.file_extension}`, [table]);

  const props: UploadProps = {
    name: 'file',
    action: `${API}/uploadNewTable`,
    onChange: async info => {
      if (info.file.status !== 'uploading') {
        window.console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        const token = info.file.response.token;
        Cookies.set('token', token);

        dispatch(fetchTableAction());

        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    showUploadList: false,
  };

  const onChange = useCallback(async (value: number) => {
    try {
      const res = await dataAPI.updateTableProperties(`target_index=${value}`);

      window.console.log(res);
    } catch (e) {
      window.console.log(e);
    }
  }, []);

  return {
    props,
    table,
    options,
    logoName,
    onChange,
  };
};

export default useHeader;
