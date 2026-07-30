import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StringsAndRegex = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/IOAndUtils/StringsAndRegex';

  return (
    <>
      <PageLayout>
        <PageTitle title="Strings & Regex" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StringsAndRegex;
