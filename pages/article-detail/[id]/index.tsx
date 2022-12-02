import { GetServerSideProps } from "next";
import React from "react";
import { getArticleDetailService } from "../../services/article";
import { ArticleInfo } from "../../services/article/model";
import { getLayout } from "../../components/layout";

interface Props {
  data: ArticleInfo;
  id: string;
}

const ArticleDetail: any = ({ data, id }: Props) => {
  return <div>{data.content}</div>;
};

ArticleDetail.getLayout = getLayout;

export default ArticleDetail;

// SSR
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const data = (await getArticleDetailService(id as string)) as ArticleInfo;

  return { props: { data, id } };
};
