import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Views = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/Views';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Views" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Views;
