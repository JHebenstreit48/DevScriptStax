import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
