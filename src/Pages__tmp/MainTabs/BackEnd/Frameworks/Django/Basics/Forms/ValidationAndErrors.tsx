import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ValidationAndErrors = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Forms/ValidationAndErrors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Validation & Errors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValidationAndErrors;
