import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RenderingContext = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/RenderingContext';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rendering Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RenderingContext;
