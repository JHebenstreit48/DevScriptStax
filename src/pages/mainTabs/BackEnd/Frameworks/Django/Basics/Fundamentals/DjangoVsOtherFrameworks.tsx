import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DjangoVsOtherFrameworks = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Fundamentals/DjangoVsOtherFrameworks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Django vs Other Frameworks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DjangoVsOtherFrameworks;
