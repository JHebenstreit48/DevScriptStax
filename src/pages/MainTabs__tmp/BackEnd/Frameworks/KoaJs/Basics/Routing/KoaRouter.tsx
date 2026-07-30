import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KoaRouter = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/Routing/KoaRouter';

  return (
    <>
      <PageLayout>
        <PageTitle title="Koa Router" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KoaRouter;
