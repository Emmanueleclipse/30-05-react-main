import { useQuery, useMutation } from 'react-query';
import useAxios from '@contexts/all/useAxios';

export const createQueryHook = (key, path) => (queryParams) => {
  const Axios = useAxios();
  const pathResult = typeof path === 'string' ? path : path(queryParams);
  const getInstances = async () => {
    const { data } = await Axios.get(pathResult);
    return data;
  };
  return useQuery(key, getInstances);
};

export const createQueryOneHook = (key, getPath) => (instanceId, config) => {
  const Axios = useAxios();
  const getInstanceById = async (id) => {
    const { data } = await Axios.get(getPath(id));
    return data;
  };
  return useQuery([key, instanceId], () => getInstanceById(instanceId), config);
};

export const createMutationToPost = (path, sideEffects) => () => {
  const Axios = useAxios();
  const createInstance = (newInstance) => Axios.post(path, newInstance);
  return useMutation(createInstance, sideEffects);
};

export const createMutationToDelete = (getPath, sideEffects) => () => {
  const Axios = useAxios();
  const deleteInstance = (instanceId) => Axios.delete(getPath(instanceId));
  return useMutation(deleteInstance, sideEffects);
};

export const createMutationToUpdate = (getPath, sideEffects) => () => {
  const Axios = useAxios();
  const updateInstance = ({ id, ...data }) => Axios.put(getPath(id), data);
  return useMutation(updateInstance, sideEffects);
};
