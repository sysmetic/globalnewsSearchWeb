/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { ReactNode, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: ReactNode;
  onLoadMoreHandler: VoidFunction;
  hasMore: boolean;
  isLoading: boolean;
}

export const useInfiniteListView = ({
  children,
  onLoadMoreHandler,
  hasMore,
  isLoading,
  ...rest
}: Props) => {
  const { ref, inView } = useInView({ threshold: 0.3, rootMargin: '0px 0px 400px 0px' });
  
  const isLoadMore = useMemo(() => (
    !isLoading && hasMore && inView
  ), [hasMore, isLoading, inView]);

  useEffect(() => {
    if (isLoadMore) {
      onLoadMoreHandler();
    }
  }, [onLoadMoreHandler, isLoadMore]);

  return {ref,inView}
  
};

