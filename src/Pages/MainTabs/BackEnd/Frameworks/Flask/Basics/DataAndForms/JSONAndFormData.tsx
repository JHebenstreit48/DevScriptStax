import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSONAndFormData = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/DataAndForms/JSONAndFormData';

  return (
    <>
      <PageLayout>
        <PageTitle title="JSON & Form Data" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSONAndFormData;
