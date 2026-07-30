import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Packaging = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production/Packaging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Packaging (Jar/War)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Packaging;
