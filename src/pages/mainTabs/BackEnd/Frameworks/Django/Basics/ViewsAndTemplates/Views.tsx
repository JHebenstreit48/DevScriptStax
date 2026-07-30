import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
