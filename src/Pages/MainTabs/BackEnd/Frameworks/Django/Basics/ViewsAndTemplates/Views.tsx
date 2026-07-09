import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Views = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/Views';

  return (
    <>
      <PageLayout>
        <PageTitle title="Views" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Views;
