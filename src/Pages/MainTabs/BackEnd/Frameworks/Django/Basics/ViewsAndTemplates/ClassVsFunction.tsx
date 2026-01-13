import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClassVsFunction = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/ClassVsFunction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Class vs Function" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassVsFunction;
