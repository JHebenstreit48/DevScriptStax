import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KoaRouter = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/Routing/KoaRouter';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Koa Router" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KoaRouter;
